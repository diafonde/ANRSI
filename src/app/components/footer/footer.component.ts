import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>123 Science Avenue</p>
          <p>Research City, RC 12345</p>
          <p>Email: info@anrsi.gov</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a routerLink="/news">Latest News</a></li>
            <li><a routerLink="/about">About Us</a></li>
            <li><a routerLink="/contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Facebook</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{currentYear}} National Agency for Scientific Research and Innovation. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, rgba(26, 61, 26, 0.98), rgba(26, 61, 26, 0.95));
      color: white;
      padding: 3rem 0 1rem;
      margin-top: 2rem;
      backdrop-filter: blur(10px);
    }
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .footer-section h3 {
      color: white;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
    .footer-section p {
      margin: 0.5rem 0;
      color: rgba(255, 255, 255, 0.9);
    }
    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-section ul li {
      margin: 0.5rem 0;
    }
    .footer-section a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .footer-section a:hover {
      color: white;
      transform: translateX(5px);
    }
    .social-links {
      display: flex;
      gap: 1rem;
    }
    .social-link {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      transition: all 0.3s ease;
    }
    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .footer-bottom p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      .footer {
        padding: 2rem 0 1rem;
      }
      
      .footer-section {
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
} 