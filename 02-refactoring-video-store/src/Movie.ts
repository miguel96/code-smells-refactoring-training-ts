export class Movie {
    public static CHILDRENS: number = 2;
    public static REGULAR: number = 0;
    public static NEW_RELEASE: number = 1;

    private title: string;
    private priceCode: number;

    constructor(title: string, priceCode: number) {
        this.title = title;
        this.priceCode = priceCode;
    }

    private getPriceCode(): number {
        return this.priceCode;
    }

    public setPriceCode(code: number) {
        this.priceCode = code;
    }

    public getTitle(): string {
        return this.title;
    }

    calculateAmount(daysRented: number) {
        let amount = 0;
        switch (this.getPriceCode()) {
            case Movie.REGULAR:
                amount += 2;
                if (daysRented > 2)
                    amount += (daysRented - 2) * 1.5;
                break;
            case Movie.NEW_RELEASE:
                amount += daysRented * 3;
                break;
            case Movie.CHILDRENS:
                amount += 1.5;
                if (daysRented > 3)
                    amount += (daysRented - 3) * 1.5;
                break;
        }
        return amount;
    }

    calculateRenterPoints(daysRented: number) {
        if (this.getPriceCode() == Movie.NEW_RELEASE
          && daysRented > 1)
            return 2;
        return 1;
    }

}