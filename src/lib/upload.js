import dns from "node:dns";
import https from "node:https";
import cloudinary from "@/lib/cloudinary";

// Some networks answer with IPv6 (NAT64) addresses this host cannot route, which
// made uploads fail with "connect ENETUNREACH". Pin outbound uploads to IPv4.
dns.setDefaultResultOrder("ipv4first");

const ipv4Agent = new https.Agent({ family: 4, keepAlive: true });

const NETWORK_CODES = ["ENETUNREACH", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EAI_AGAIN"];

const toFriendlyError = (error) => {
  if (NETWORK_CODES.includes(error?.code) || error?.name === "TimeoutError") {
    return new Error("Could not reach the image service. Please check the server's internet connection and try again.");
  }
  return new Error(error?.message || "Image upload failed");
};

// Uploads a Buffer to Cloudinary and resolves with the upload result.
export const uploadImage = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        // Connection options travel alongside the upload params; the SDK reads
        // `agent`/`timeout` from this same object.
        agent: ipv4Agent,
        timeout: 60000,
      },
      (error, result) => {
        if (!error) return resolve(result);
        console.error("Cloudinary upload failed:", error.message || error);
        reject(toFriendlyError(error));
      }
    ).end(buffer);
  });
};
