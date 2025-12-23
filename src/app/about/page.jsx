import Image from "next/image";

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
            <Image src="/ash-banner.png" alt="banner" width={850} height={300} className='rounded-lg'/>
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
      </div>
    </div>
  )
}