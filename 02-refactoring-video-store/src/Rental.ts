import {Movie} from "./Movie";

export class Rental {
  private movie: Movie;
  private daysRented: number;

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  public getDaysRented(): number {
    return this.daysRented;
  }

  public getMovie(): Movie {
    return this.movie;
  }

  public getMovieTitle() {
    return this.getMovie().getTitle();
  }

  calculateAmount(): number {
    return this.movie.calculateAmount(this.getDaysRented());
  }

  calculateRenterPoints(): number {
    return this.movie.calculateRenterPoints(this.getDaysRented());
  }

}