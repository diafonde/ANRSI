import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { register } from 'swiper/element/bundle';

register();

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SlideshowComponent],
  template: `
    <app-slideshow></app-slideshow>

    <section class="featured-news">
      <h2>Featured Articles</h2>
      <div class="news-grid">
        <article *ngFor="let article of featuredArticles" class="news-card">
          <div class="news-image">
            <img [src]="article.imageUrl" [alt]="article.title">
          </div>
          <div class="news-content">
            <span class="category">{{article.category}}</span>
            <h3>{{article.title}}</h3>
            <p>{{article.summary}}</p>
            <div class="news-meta">
              <span class="date">{{article.date | date}}</span>
              <a [routerLink]="['/news', article.id]" class="read-more">Read More</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="categories">
      <h2>Explore by Category</h2>
      <div class="category-grid">
        <a routerLink="/news" [queryParams]="{category: 'research'}" class="category-card">
          <h3>Research</h3>
          <p>Latest scientific discoveries and research findings</p>
        </a>
        <a routerLink="/news" [queryParams]="{category: 'innovation'}" class="category-card">
          <h3>Innovation</h3>
          <p>Cutting-edge technological advancements</p>
        </a>
        <a routerLink="/news" [queryParams]="{category: 'events'}" class="category-card">
          <h3>Events</h3>
          <p>Upcoming conferences and scientific gatherings</p>
        </a>
        <a routerLink="/news" [queryParams]="{category: 'grants'}" class="category-card">
          <h3>Grants</h3>
          <p>Funding opportunities and research grants</p>
        </a>
      </div>
    </section>

    <section class="services">
      <h2>ANRSI Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-flask"></i>
          </div>
          <h3>Research Support</h3>
          <p>Access funding, resources, and expertise for your research projects</p>
          <a routerLink="/services/research" class="service-link">Learn More</a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-lightbulb"></i>
          </div>
          <h3>Innovation Hub</h3>
          <p>Connect with industry partners and transform ideas into solutions</p>
          <a routerLink="/services/innovation" class="service-link">Learn More</a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <h3>Training Programs</h3>
          <p>Professional development and capacity building opportunities</p>
          <a routerLink="/services/training" class="service-link">Learn More</a>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <h3>Collaboration</h3>
          <p>Build partnerships with research institutions and industry</p>
          <a routerLink="/services/collaboration" class="service-link">Learn More</a>
        </div>
      </div>
    </section>

  `,
  styles: [`
    @import 'swiper/css';
    @import 'swiper/css/navigation';
    @import 'swiper/css/pagination';

    .featured-news, .categories, .services, .archives {
      width: 100%;
      margin: 0;
      padding: 2rem;
      min-height: 600px;
      display: flex;
      flex-direction: column;
      background-color: #D0F0C0;
    }

    .featured-news h2, .categories h2, .services h2, .archives h2 {
      margin-bottom: 2rem;
      color: #1a3d1a;
      text-align: center;
    }

    .news-grid, .category-grid, .services-grid, .archives-grid {
      flex: 1;
      display: grid;
      gap: 2rem;
    }
    .news-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .category-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .services-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .archives-grid {
      flex: 1;
      display: grid;
      gap: 2rem;
      margin-bottom: 0;
    }
    .news-card, .category-card, .service-card, .archive-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: white;
      border-radius: 0;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .news-card:hover, .category-card:hover, .service-card:hover, .archive-card:hover {
      transform: translateY(-5px);
    }
    .news-content, .category-card, .service-card, .archive-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
    }
    .news-content h3, .category-card h3, .service-card h3, .archive-content h3 {
      margin: 1rem 0;
      color: #2c3e50;
    }
    .news-content p, .category-card p, .service-card p, .archive-content p {
      color: #666;
      margin-bottom: 1.5rem;
      flex: 1;
    }
    .news-meta {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
    }
    .category {
      background: #1a3d1a;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
    .read-more, .service-link, .archive-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: #1a3d1a;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      margin-top: auto;
    }
    .read-more:hover, .service-link:hover, .archive-link:hover {
      background: #2c5e2c;
    }
    .news-image img, .archive-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .service-icon {
      font-size: 2.5rem;
      color: #2c5e2c;
      margin-bottom: 1rem;
      text-align: center;
    }
    .services {
      background: #f8f9fa;
    }
    .archive-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: white;
      border-radius: 0;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      margin-bottom: 0;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #1a3d1a;
      margin: 0;
    }

    .explore-link {
      color: #1a3d1a;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .explore-link:hover {
      gap: 0.8rem;
    }

    .archives-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .news-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: relative;
    }

    .news-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
    }

    .news-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .news-item:hover .news-image img {
      transform: scale(1.05);
    }

    .news-date {
      padding: 1rem;
      color: #666;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .news-item h3 {
      padding: 0 1rem 3rem;
      margin: 0;
      font-size: 1.2rem;
      color: #1a3d1a;
      line-height: 1.4;
    }

    .read-more-arrow {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
      background: #1a3d1a;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .read-more-arrow:hover {
      background: #2c5e2c;
      transform: translateX(5px);
    }

    .pagination-dots {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 2rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ccc;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .dot.active {
      background: #1a3d1a;
      transform: scale(1.2);
    }

    @media (max-width: 1024px) {
      .archives-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .archives-grid {
        grid-template-columns: 1fr;
      }

      .section-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }

    .news-swiper {
      width: 100%;
      padding: 20px 0;
    }

    swiper-container {
      padding-bottom: 40px !important;
    }

    .swiper-pagination {
      bottom: 0 !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #1a3d1a !important;
    }

    .swiper-pagination-bullet-active {
      background: #1a3d1a !important;
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'Breakthrough in Quantum Computing Research',
      summary: 'Scientists achieve major milestone in quantum computing with new error correction method.',
      imageUrl: '/assets/images/quantum-computing.jpg',
      category: 'Research',
      date: new Date('2024-03-15')
    },
    {
      id: 2,
      title: 'New Renewable Energy Initiative Launched',
      summary: 'Government announces major funding for renewable energy research and development.',
      imageUrl: '/assets/images/renewable-energy.jpg',
      category: 'Innovation',
      date: new Date('2024-03-14')
    },
    {
      id: 3,
      title: 'International Science Conference Announced',
      summary: 'Leading scientists to gather for annual conference on climate change solutions.',
      imageUrl: '/assets/images/conference.jpg',
      category: 'Events',
      date: new Date('2024-03-13')
    }
  ];

  newsItems = [
    {
      id: 1,
      title: 'KACST President: Vision 2030 Is Leading The Kingdom Toward A Prosperous Innovation-Based Economy',
      imageUrl: '/assets/images/news/president.jpg',
      date: new Date('2025-04-27')
    },
    {
      id: 2,
      title: 'Saudi Arabia Launches First Hackathon For Innovation In Semiconductor Technologies',
      imageUrl: '/assets/images/news/hackathon.jpg',
      date: new Date('2025-04-20')
    },
    {
      id: 3,
      title: 'Saudi Arabia Launches Quantum Valley To Operate First Quantum Computer',
      imageUrl: '/assets/images/news/quantum.jpg',
      date: new Date('2025-04-15')
    },
    {
      id: 4,
      title: 'New Research Center Opens for Advanced Materials Development',
      imageUrl: '/assets/images/news/research-center.jpg',
      date: new Date('2025-04-10')
    },
    {
      id: 5,
      title: 'International Collaboration Summit on Climate Technology',
      imageUrl: '/assets/images/news/climate-tech.jpg',
      date: new Date('2025-04-05')
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // TODO: Fetch featured articles from API
  }
} 