import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { TUTORIAL_SECTIONS, HOME_SECTION } from './constants';
import { TutorialSectionData } from './types';
import TutorialPage from './components/TutorialPage';
import { icons } from './components/icons';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const navItems = [
  { id: 'home', path: '/', title: '시작하기', icon: icons.Home, data: HOME_SECTION},
  { id: TUTORIAL_SECTIONS[0].id, path: `/${TUTORIAL_SECTIONS[0].id}`, title: TUTORIAL_SECTIONS[0].title, icon: icons.BookOpen, data: TUTORIAL_SECTIONS[0]},
  { id: TUTORIAL_SECTIONS[1].id, path: `/${TUTORIAL_SECTIONS[1].id}`, title: TUTORIAL_SECTIONS[1].title, icon: icons.Code, data: TUTORIAL_SECTIONS[1]},
  { id: TUTORIAL_SECTIONS[2].id, path: `/${TUTORIAL_SECTIONS[2].id}`, title: TUTORIAL_SECTIONS[2].title, icon: icons.Terminal, data: TUTORIAL_SECTIONS[2]},
  { id: TUTORIAL_SECTIONS[3].id, path: `/${TUTORIAL_SECTIONS[3].id}`, title: TUTORIAL_SECTIONS[3].title, icon: icons.Zap, data: TUTORIAL_SECTIONS[3]},
  { id: TUTORIAL_SECTIONS[4].id, path: `/${TUTORIAL_SECTIONS[4].id}`, title: '바이브코딩', icon: icons.FlaskConical, data: TUTORIAL_SECTIONS[4]},
  { id: TUTORIAL_SECTIONS[5].id, path: `/${TUTORIAL_SECTIONS[5].id}`, title: TUTORIAL_SECTIONS[5].title, icon: icons.Cloud, data: TUTORIAL_SECTIONS[5]},
  { id: TUTORIAL_SECTIONS[6].id, path: `/${TUTORIAL_SECTIONS[6].id}`, title: '프로젝트 가져오기', icon: icons.Github, data: TUTORIAL_SECTIONS[6]},
  { id: TUTORIAL_SECTIONS[7].id, path: `/${TUTORIAL_SECTIONS[7].id}`, title: 'API 키 설정', icon: icons.KeyRound, data: TUTORIAL_SECTIONS[7]},
  { id: TUTORIAL_SECTIONS[8].id, path: `/${TUTORIAL_SECTIONS[8].id}`, title: TUTORIAL_SECTIONS[8].title, icon: icons.Rocket, data: TUTORIAL_SECTIONS[8]},
  { id: TUTORIAL_SECTIONS[9].id, path: `/${TUTORIAL_SECTIONS[9].id}`, title: TUTORIAL_SECTIONS[9].title, icon: icons.LayoutGrid, data: TUTORIAL_SECTIONS[9]},
  { id: TUTORIAL_SECTIONS[10].id, path: `/${TUTORIAL_SECTIONS[10].id}`, title: '저자 소개', icon: icons.User, data: TUTORIAL_SECTIONS[10]},
];

const Header: React.FC<{ toggleSidebar: () => void; isOpen: boolean }> = ({ toggleSidebar, isOpen }) => (
  <header className="p-4 bg-white border-b border-gray-200 flex items-center h-16 flex-shrink-0">
    <button
      onClick={toggleSidebar}
      className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      aria-label="메뉴 토글"
    >
      {isOpen ? <PanelLeftClose className="w-6 h-6" /> : <PanelLeftOpen className="w-6 h-6" />}
    </button>
  </header>
);

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <aside className={`bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-64 p-6' : 'w-0 p-0'} overflow-hidden`}>
    <h1 className="text-xl font-bold text-gray-900 mb-8 leading-tight whitespace-nowrap">요즘 교사를 위한<br/>AI 웹앱 제작 가이드</h1>
    <nav>
      <ul>
        {navItems.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-1 text-lg rounded-lg transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
    <div className="container mx-auto text-center text-sm">
      <p>&copy; {new Date().getFullYear()} 이대형. All rights reserved.</p>
      <a href="https://aicreatorz.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
        https://aicreatorz.netlify.app/
      </a>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} />
          <div className="flex-1 flex flex-col min-w-0">
            <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <main className="flex-1 p-8 lg:p-12 overflow-y-auto bg-gray-50">
              <Routes>
                {navItems.map(item => (
                  <Route key={item.id} path={item.path} element={<TutorialPage section={item.data} icon={item.icon} />} />
                ))}
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;