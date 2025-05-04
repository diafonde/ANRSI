import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="top-bar">
        <div class="top-container">
          <div class="top-right">
            <div class="lang-switcher">
              <button class="lang-btn" (click)="toggleLangMenu()">
                <i class="fas fa-globe"></i>
                {{ currentLang === 'ar' ? 'عربي' : 'Français' }}
                <i class="fas fa-chevron-down"></i>
              </button>
              <div class="lang-menu" [class.show]="isLangMenuOpen">
                <a href="#" (click)="changeLang('fr')">Français</a>
                <a href="#" (click)="changeLang('ar')">العربية</a>
              </div>
            </div>
            <div class="auth-buttons">
              <a routerLink="/login" class="login-btn">
                <i class="fas fa-user"></i> {{ 'AUTH.LOGIN' | translate }}
              </a>
              <a routerLink="/signup" class="signup-btn">
                <i class="fas fa-user-plus"></i> {{ 'AUTH.SIGNUP' | translate }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="main-header">
        <div class="header-container">
          <div class="logo">
            <a routerLink="/">
              <div class="logo-icon">
                <img src="assets/images/logoo.png" alt="ANRSI Logo">
              </div>
              <div class="logo-text">
                <h1>{{ 'HEADER.TITLE' | translate }}</h1>
                <h3>{{ 'HEADER.SUBTITLE' | translate }}</h3>
              </div>
            </a>
          </div>

          <div class="search-box">
            <form (ngSubmit)="onSearch()">
              <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher...">
              <button type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <nav class="main-nav">
        <div class="nav-container">
          <ul>
            <li>
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <i class="fas fa-home"></i> {{ 'HEADER.NAV.HOME' | translate }}
              </a>
            </li>
            <li class="has-dropdown">
              <a routerLink="/news" routerLinkActive="active">
                <i class="fas fa-newspaper"></i> {{ 'HEADER.NAV.NEWS' | translate }}
              </a>
              <div class="dropdown-menu">
                <a routerLink="/news/latest"><i class="fas fa-clock"></i> Dernières Nouvelles</a>
                <a routerLink="/news/research"><i class="fas fa-flask"></i> Recherche</a>
                <a routerLink="/news/innovation"><i class="fas fa-lightbulb"></i> Innovation</a>
                <a routerLink="/news/events"><i class="fas fa-calendar-alt"></i> Événements</a>
              </div>
            </li>
            <li class="has-dropdown">
              <a routerLink="/about" routerLinkActive="active">
                <i class="fas fa-info-circle"></i> {{ 'HEADER.NAV.ABOUT' | translate }}
              </a>
              <div class="dropdown-menu">
                <a routerLink="/about/mission"><i class="fas fa-bullseye"></i> Notre Mission</a>
                <a routerLink="/about/team"><i class="fas fa-users"></i> Notre Équipe</a>
                <a routerLink="/about/partners"><i class="fas fa-handshake"></i> Partenaires</a>
                <a routerLink="/about/careers"><i class="fas fa-briefcase"></i> Carrières</a>
              </div>
            </li>
            <li class="has-dropdown">
              <a routerLink="/media" routerLinkActive="active">
                <i class="fas fa-photo-video"></i> Médiathèque
              </a>
              <div class="dropdown-menu">
                <a routerLink="/media/videos"><i class="fas fa-video"></i> Vidéos</a>
                <a routerLink="/media/photos"><i class="fas fa-camera"></i> Photos</a>
                <a routerLink="/media/gallery"><i class="fas fa-images"></i> Galerie</a>
              </div>
            </li>
            <li>
              <a routerLink="/contact" routerLinkActive="active">
                <i class="fas fa-envelope"></i> {{ 'HEADER.NAV.CONTACT' | translate }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
 
    .top-bar {
      background: #1a3d1a;
      padding: 0.5rem 0;
    }

    .top-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: flex-end;
    }

    .top-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .auth-buttons {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .login-btn, .signup-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .login-btn {
      color: white;
      background: transparent;
    }

    .login-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .signup-btn {
      color: #1a3d1a;
      background: white;
    }

    .signup-btn:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-1px);
    }

    .lang-switcher {
      position: relative;
    }

    .lang-btn {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
    }

    .lang-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .lang-menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      display: none;
      min-width: 120px;
      margin-top: 0.5rem;
      z-index: 1000;
    }

    .lang-menu.show {
      display: block;
    }

    .lang-menu a {
      display: block;
      padding: 0.8rem 1.2rem;
      color: #1a3d1a;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .lang-menu a:hover {
      background: #f5f5f5;
    }

    .main-header {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      padding: 1.5rem 0;
      border-bottom: 1px solid rgba(122, 198, 210, 0.1);
      min-height: 150px;
      display: flex;
      align-items: flex-start;
    }

    .header-container {
      max-width: 1200px;
      margin: 0;
      padding: 0 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
    }

    .logo {
      margin-left: 0;
      padding-left: 0;
    }

    .logo a {
      text-decoration: none;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-left: 0;
      padding-left: 0;
    }

    .logo-icon {
      width: 100px;
      height: 100px;
      transition: transform 0.3s ease;
    }

    .logo:hover .logo-icon {
      transform: scale(1.1);
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 0.5rem;
    }

    .logo-text h1 {
      color: #1a3d1a;
      margin: 0;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .logo-text h3 {
      color: #666;
      font-size: 1.2rem;
      margin: 0.4rem 0 0 0;
      font-weight: 500;
    }

    .search-box {
      position: relative;
      width: 300px;
      margin-right: 0;
    }

    .search-box form {
      display: flex;
      align-items: center;
    }

    .search-box input {
      width: 100%;
      padding: 0.8rem 3rem 0.8rem 1.5rem;
      border: 2px solid #e0e0e0;
      border-radius: 30px;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      background: #f5f5f5;
    }

    .search-box input:focus {
      border-color: #1a3d1a;
      background: white;
      outline: none;
      box-shadow: 0 0 0 4px rgba(26, 61, 26, 0.1);
    }

    .search-box button {
      position: absolute;
      right: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      color: #666;
      transition: all 0.3s ease;
    }

    .search-box button:hover {
      color: #1a3d1a;
      transform: translateY(-50%) scale(1.1);
    }

    .main-nav {
      background: linear-gradient(135deg, rgba(26, 61, 26, 0.98), rgba(26, 61, 26, 0.85));
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(26, 61, 26, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .main-nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 2rem;
    }

    .main-nav li {
      position: relative;
    }

    .main-nav a {
      color: white;
      text-decoration: none;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .main-nav a:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    .main-nav a.active {
      color: white;
      position: relative;
    }

    .main-nav a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: white;
      border-radius: 3px 3px 0 0;
    }

    .has-dropdown:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: -1rem;
      background: white;
      min-width: 220px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      z-index: 100;
      padding: 0.5rem 0;
    }

    .dropdown-menu a {
      color: #333;
      padding: 0.8rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-bottom: 1px solid #f0f0f0;
    }

    .dropdown-menu a:last-child {
      border-bottom: none;
    }

    .dropdown-menu a:hover {
      background: #f8f9fa;
      color: #1a3d1a;
    }

    .dropdown-menu i {
      width: 20px;
      color: #666;
    }

    @media (max-width: 1024px) {
      .logo-text span {
        display: none;
      }

      .search-box {
        width: 250px;
      }

      .main-nav ul {
        gap: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .top-bar-left {
        display: none;
      }

      .social-links {
        display: none;
      }

      .main-header {
        padding: 0.8rem 0;
      }

      .logo-icon {
        width: 50px;
        height: 50px;
      }

      .logo-text h1 {
        font-size: 1.5rem;
      }

      .search-box {
        width: 200px;
      }

      .main-nav ul {
        gap: 1rem;
      }

      .main-nav a {
        font-size: 0.9rem;
      }

      .lang-switcher {
        margin-left: 1rem;
      }

      .auth-buttons {
        gap: 0.5rem;
      }

      .login-btn, .signup-btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
      }
    }
  `]
})
export class HeaderComponent {
  searchQuery: string = '';
  currentLang = 'fr';
  isLangMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  onSearch() {
    // TODO: Implement search functionality
    console.log('Search query:', this.searchQuery);
  }

  toggleLangMenu() {
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this.isLangMenuOpen = false;
    
    // Add RTL support for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
} 