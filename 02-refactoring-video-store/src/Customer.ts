import {Rental} from "./Rental";

export class Customer {
    private name: string;
    private rentals = Array<Rental>();

    constructor(name: string) {
        this.name = name;
    }

    public addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    public getName(): string {
        return this.name;
    }

    public statement(): string {
        let frequentRenterPoints = this.calculateFrequentRenterPoints(this.rentals);

        let totalAmount = this.calculateTotalAmount(this.rentals);

        return this.generateStatement(this.rentals, totalAmount, frequentRenterPoints);
    }


    private calculateTotalAmount(rentals: Rental[]) {
        let totalAmount = 0;
        for (const each of rentals) {
            totalAmount += this.calculateAmount(each);
        }
        return totalAmount;
    }

    private calculateFrequentRenterPoints(rentals: Rental[]) {
        let frequentRenterPoints = 0;
        for (const each of rentals) {
            frequentRenterPoints += this.calculateRenterPoints(each);
        }
        return frequentRenterPoints;
    }

    private generateStatement(rentals: Rental[], totalAmount: number, frequentRenterPoints: number) {
        let result = "Rental Record for " + this.getName() + "\n";

        for (const rental of rentals) {
            result += "\t" + rental.getMovieTitle() + "\t"
              + this.calculateAmount(rental).toFixed(1) + "\n";
        }

        result += "You owed " + totalAmount.toFixed(1) + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points\n";
        return result;
    }

    private calculateRenterPoints(rental: Rental): number {
        return rental.calculateRenterPoints();
    }

    private calculateAmount(rental: Rental): number {
        return rental.calculateAmount();
    }
}