import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentSlide = 0;
  sliderImages = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg',
  ];

  sponsors = [
    'assets/sponsor1.jpg',
    'assets/sponsor2.jpg',
    'assets/sponsor3.jpg',
    'assets/sponsor4.jpg',
  ];

  noticias = [
    { imagen: 'assets/news1.jpg', texto: 'Victoria del equipo en casa' },
    { imagen: 'assets/news2.jpg', texto: 'Nueva equipación disponible' },
    { imagen: 'assets/news3.jpg', texto: 'Calendario de entrenamientos' },
    { imagen: 'assets/news4.jpg', texto: 'Entrevista al capitán' },
    { imagen: 'assets/news5.jpg', texto: 'Torneo local próximo domingo' },
    { imagen: 'assets/news6.jpg', texto: 'Ampliación del campo de juego' },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5s
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.sliderImages.length) %
      this.sliderImages.length;
  }
}
