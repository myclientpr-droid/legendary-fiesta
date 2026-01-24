'use client'
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-center mb-12">About Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4 indent-6 text-justify">
              Aurbina Scholars Hub is a youth-led, non-profit organization dedicated to supporting refugees from all backgrounds and ethnic communities. Our mission is to rebuild lives disrupted by displacement through education, empowerment, and community support.
            </p>
            <p className="text-lg text-gray-600 mb-4 indent-6 text-justify">
              We work to create inclusive and safe learning spaces where refugee children and youth can access quality education, develop essential life skills, and regain hope for a better future. By addressing gaps in opportunity, protection, and access to resources, we aim to equip individuals with the knowledge and confidence needed to become self-reliant and active contributors to society.
            </p>
            <p className="text-lg text-gray-600 mb-4 indent-6 leading-relax text-justify">
              Our mission is grounded in dignity, equality, and human rights. We believe that every refugee—regardless of origin, gender, or legal status—deserves the opportunity to learn, grow, and lead. Through education, awareness, and community-driven initiatives, we strive to rebuild not only academic pathways, but also resilience, identity, and purpose.
            </p>
            <p className="text-gray-600 text-justify indent-6">
              Founded in 2024, we have grown from a small local initiative to an international organization impacting thousands of lives annually.
            </p>
          </div>
          <div className="bg-gray-300 rounded-lg flex items-center justify-center">
            <Image src="/og-image.jpg" alt="banner" width={850} height={300} className='rounded-lg'/>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-center mb-12">Our Values</h2>
          <p className='text-md font-normal text-gray-700 mb-4'>At Aurbina Scholars Hub, our work is guided by the following core values:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{title:'Dignity and Respect', value:"We uphold the dignity of every individual and treat all people with respect, regardless of background, ethnicity, gender, religion, or legal status."},{title:"Inclusivity and Equality", value:"We believe in equal access to education and opportunities for all refugees and marginalized communities, without discrimination."}, {title:"Education as Empowerment", value:"We view education as a powerful tool for rebuilding lives, strengthening resilience, and creating long-term change."}, {title:"Child Protection and Safeguarding", value:"The safety and well-being of children and youth are our top priorities. We maintain zero tolerance for abuse, exploitation, or harm."}, {title:"Community-Led Action", value:"As a youth-led initiative, we believe sustainable impact comes from community-driven solutions and meaningful participation."}, {title:"Integrity and Accountability", value:"We act with honesty, transparency, and responsibility in all our programs, partnerships, and use of resources."}, {title:"Collaboration and Solidarity", value:"We value partnerships and collective action, working with communities, organizations, and allies to amplify impact."}].map((item, idx) => (
              <div key={idx} className="text-center p-6 card">
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">{idx+1}</span>
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-gray-600 text-justify leading-relax">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Jane Doe', role: 'Founder & CEO', img: ''},
              { name: 'John Smith', role: 'Program Director', img: '' },
              { name: 'Mohammed Ismail', role: 'Tech Lead', img: '' },
              { name: 'Maria Garcia', role: 'Finance Manager', img: ''},
              { name: 'David Lee', role: 'Volunteer Coordinator', img: ''},
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-gray-500">Photo</div>
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-10 text-center max-w-3xl mx-auto">
  <h1 className="pb-4">Collaborate with Us</h1>

  <p className="text-gray-800 bg-primary-100 rounded-lg shadow-[-4px_3px_2px_#60A3B2] text-justify p-6 leading-relaxed mb-8">
    We believe real and lasting change happens through collaboration. Aurbina
    Scholars Hub partners with NGOs, educators, youth groups, community leaders,
    and mission-aligned organizations to expand access to education, protection,
    and empowerment. Through partnerships, we co-create impactful programs,
    exchange knowledge, and reach underserved refugee children and communities.
    Together, we can build sustainable solutions that create long-term impact.
  </p>
  {/* CTA buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    
    {/* Organization Collaboration */}
    <button
      onClick={() => {
        const subject = encodeURIComponent("Organization Collaboration Proposal");
        const body = encodeURIComponent(
          `Hello Aurbina Scholars Hub Team,\n\nWe represent an organization interested in collaborating with Aurbina Scholars Hub on education, protection, or community initiatives.\n\nPlease let us know the next steps to explore a potential partnership.\n\nOrganization Name:\nFocus Area:\nContact Person:\n\nThank you.`
        );
        window.location.href = `mailto:ashmrk262@gmail.com?subject=${subject}&body=${body}`;
      }}
      className="btn-primary w-full sm:w-auto"
    >
      Partner as an Organization
    </button>

    {/* Individual Collaborator */}
    <button
      onClick={() => {
        const subject = encodeURIComponent("Individual Collaboration Interest");
        const body = encodeURIComponent(
          `Hello Aurbina Scholars Hub Team,\n\nI am interested in collaborating with Aurbina Scholars Hub as an individual contributor.\n\nSkills / Expertise:\nAvailability:\nAreas of Interest:\n\nThank you.`
        );
        window.location.href = `mailto:ashmrk262@gmail.com?subject=${subject}&body=${body}`;
      }}
      className="btn-secondary w-full sm:w-auto"
    >
      Join as a Collaborator
    </button>
  </div>
</div>
<div className="py-10 text-center">
  <h1 className="pb-4">Our Collaborators</h1>

  <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-justify indent-5">
    We are grateful to work alongside dedicated individuals, organizations, and community groups
    who believe in the power of education and collective action. Their support, expertise, and
    commitment help us expand our reach and create lasting impact for learners and communities.
  </p>
  {/* Collaborators Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Card */}
    <div className="bg-zinc-100 rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="w-24 h-24 flex items-center justify-center mb-3 bg-zinc-50 rounded-full mx-auto">
        <Image src="/yes-logo.png" alt="logo"  className='w-full h-ful rounded-full' width={20} height={20}/>
      </div>
        <span className="text-xl font-semibold text-primary">
          Youth Empowerment Support (YES)
        </span>
    </div>
    <div className="bg-zinc-100 rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="w-24 h-24 flex items-center justify-center mb-3 bg-zinc-50 rounded-full mx-auto">
        <a href='https://mbsi.vercel.app' target="_blank"><Image src="/mbs-logo.jpg" alt="logo" className='w-full h-ful rounded-full' width={20} height={20}/></a>
      </div>
        <span className="text-xl font-semibold text-primary">
          Myanmar Book Space (MBS)
        </span>
    </div>
  </div>

  {/* Call to action */}
  <p className="mt-8 text-gray-700">
    Interested in becoming a collaborator?  
    <span className="font-semibold text-primary ml-1">
      Let’s work together to create impact.
    </span>
  </p>
</div>
      </div>
    </div>
  )
}