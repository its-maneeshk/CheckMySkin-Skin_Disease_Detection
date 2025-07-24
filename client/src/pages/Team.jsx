const teamMembers = [
  {
    name: 'Manish Kumar Patel',
    role: 'Founder & Developer',
    image: 'https://avatars.githubusercontent.com/u/122369058?v=4',
    bio: 'Computer Science student passionate about AI, healthcare, and open-source projects.',
    github: 'https://github.com/its-maneeshk',
    linkedin: 'https://linkedin.com/in/itsmaneeshk',
  },
  {
    name: 'Vikash Thakur',
    role: 'Data Set Creator & Model Trainer',
    image: 'https://avatars.githubusercontent.com/u/179313839?v=4',
    bio: 'Computer Science student passionate about AI and healthcare.',
    github: 'https://github.com/thakurmrvikas9',
    linkedin: 'https://linkedin.com/in/itsmaneeshk',
},
{
    name: 'MRP Munna Das',
    role: 'Model Trainer',
    image: 'https://avatars.githubusercontent.com/u/137615374?v=4',
    bio: 'Computer Science student passionate about Artificial Intelligance.',
    github: 'https://github.com/dasmrpmunna',
    linkedin: 'https://linkedin.com/in/itsmaneeshk',
  },
  {
    name: 'Shuvam Jadav',
    role: 'Documentation',
    image: 'https://avatars.githubusercontent.com/u/122369058?v=4',
    bio: 'Computer Science student passionate about AI.',
    github: 'https://github.com/its-maneeshk',
    linkedin: 'https://linkedin.com/in/itsmaneeshk',
  },
  
];

export default function Team() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Meet the People Who Made This Possible</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-md p-6 text-center transition hover:shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-gray-600 text-sm mt-2">{member.bio}</p>

            <div className="flex justify-center gap-4 mt-4">
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.9c-3.2.7-3.9-1.6-3.9-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.2.9 2.3v3.4c0 .3.2.6.8.5a10.7 10.7 0 0 0 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.52-2.5Zm.02 4.5H2V21h3V8Zm5 0h-3v13h3v-7c0-2 3-2.2 3 0v7h3v-8c0-4-4.5-3.8-6-1.9V8Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
