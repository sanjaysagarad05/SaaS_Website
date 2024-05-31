import React from 'react';

const BlogCard = ({ author, title, date, role, imageUrl, avatarUrl, link }) => {
  return (
    <a 
      href={link}
      className="border border-purple-200/5 backdrop-blur-xl bg-purple-200/5 w-full rounded-2xl shadow-inner shadow-purple-200/5 opacity-100 p-6"
    >
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden relative">
          <img src={avatarUrl} alt="The image" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <p className="text-white">{author}</p>
          <div className="flex space-x-2 text-purple-200/75">
            <span>{role}</span>
            <span>/</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="ml-auto w-10 h-10 flex items-center justify-center bg-purple-200/5 border border-purple-400/12 rounded-full shadow-inner shadow-purple-400/20">
          <img src="https://framerusercontent.com/images/OwiWD7I1kftgOiRqcw5iS2ksfiE.svg" alt="The image" className="w-full h-full object-cover" />
        </div>
      </div>
      <h6 className="text-white mb-4">{title}</h6>
      <div className="relative border border-purple-200/12 backdrop-blur-lg bg-purple-200/5 rounded-xl overflow-hidden">
        <img src={imageUrl} alt="The image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-30"></div>
      </div>
    </a>
  );
};

export default BlogCard;
