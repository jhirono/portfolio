'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/content';
import { Project, BlogPost } from '@/translations/content';
import LanguageToggle from '@/components/LanguageToggle';
import Link from 'next/link';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  // Extract project keys (excluding the 'title' key)
  const projectKeys = Object.keys(t.projects).filter(key => key !== 'title');
  
  // Extract blog post keys (excluding the 'title' key)
  const blogPostKeys = Object.keys(t.blogPosts).filter(key => key !== 'title');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative">
      <LanguageToggle />
      
      <main className="max-w-6xl w-full mx-auto flex flex-col gap-10 py-10">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">{t.header.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t.header.subtitle}</p>
          <p className="mt-4 text-md italic text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">{t.header.tagline}</p>
        </header>

        {/* Social Links */}
        <section className="flex justify-center gap-4">
          <Link 
            href="https://github.com/jhirono" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 
                     rounded-md transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {t.socialLinks.github}
          </Link>
          <Link 
            href="https://www.linkedin.com/in/jhirono/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 
                     rounded-md transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            {t.socialLinks.linkedin}
          </Link>
          <Link 
            href="https://x.com/jhirono" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 
                     rounded-md transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {t.socialLinks.twitter}
          </Link>
        </section>

        {/* Two-column layout for Blog Posts and Projects */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Posts Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">{t.blogPosts.title}</h2>
            
            {/* Dynamically render all blog posts */}
            {blogPostKeys.map((key, index) => {
              const blogPost = t.blogPosts[key] as BlogPost;
              const isLastPost = index === blogPostKeys.length - 1;
              
              return (
                <div 
                  key={key}
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${isLastPost ? '' : 'mb-4'}`}
                >
                  <h3 className="text-xl font-bold mb-2">{blogPost.title}</h3>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">{blogPost.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blogPost.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={blogPost.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1 rounded-full text-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Projects Column */}
          <div>
            {/* Remove redundant title */}
            
            {/* Active Projects Section */}
            <h2 className="text-2xl font-bold mb-4 text-center">{t.projects.activeTitle}</h2>
            
            {/* Filter and render active projects */}
            {projectKeys
              .filter(key => (t.projects[key] as Project).status === 'active')
              .map((key, index, filteredArray) => {
                const project = t.projects[key] as Project;
                const isLastProject = index === filteredArray.length - 1;
                
                return (
                  <div 
                    key={key}
                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${isLastProject ? 'mb-6' : 'mb-4'}`}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.isPrivate ? (
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          {project.privateLabel}
                        </span>
                      ) : project.comingSoon ? (
                        <>
                          <span className="text-sm px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {project.comingSoonText || 'Coming Soon'}
                          </span>
                          {project.repoUrl && (
                            <a 
                              href={project.repoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                            >
                              {project.repo}
                            </a>
                          )}
                        </>
                      ) : (
                        <>
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                            >
                              {project.demo}
                            </a>
                          )}
                          {project.demoUrl2 && (
                            <a 
                              href={project.demoUrl2} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                            >
                              {project.demo2}
                            </a>
                          )}
                          {project.repoUrl && (
                            <a 
                              href={project.repoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                            >
                              {project.repo}
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            
            {/* Maintenance Mode Projects Section */}
            <h3 className="text-xl font-semibold mb-3">{t.projects.maintenanceTitle}</h3>
            
            {/* Filter and render maintenance projects */}
            {projectKeys
              .filter(key => (t.projects[key] as Project).status === 'maintenance')
              .map((key, index, filteredArray) => {
                const project = t.projects[key] as Project;
                const isLastProject = index === filteredArray.length - 1;
                
                return (
                  <div 
                    key={key}
                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${isLastProject ? '' : 'mb-4'}`}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.isPrivate ? (
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          {project.privateLabel}
                        </span>
                      ) : project.comingSoon ? (
                        <>
                          <span className="text-sm px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {project.comingSoonText || 'Coming Soon'}
                          </span>
                          {project.repoUrl && (
                            <a 
                              href={project.repoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                            >
                              {project.repo}
                            </a>
                          )}
                        </>
                      ) : (
                        <>
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                            >
                              {project.demo}
                            </a>
                          )}
                          {project.demoUrl2 && (
                            <a 
                              href={project.demoUrl2} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                            >
                              {project.demo2}
                            </a>
                          )}
                          {project.repoUrl && (
                            <a 
                              href={project.repoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm px-3 py-1 rounded-full text-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                            >
                              {project.repo}
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full max-w-6xl mx-auto text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  );
}
