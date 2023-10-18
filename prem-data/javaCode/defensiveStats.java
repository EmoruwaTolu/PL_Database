package javaCode;
public class defensiveStats {
    
    private double tackles90;
    private double interceptions90;
    private double blocks90;
    private double clearance90;
    private double aerialsWon90;

    public defensiveStats(double tackles90, double interceptions90, double blocks90, double clearance90,double aerialsWon90){

        this.tackles90 = tackles90;
        this.interceptions90 = interceptions90;
        this.blocks90 = blocks90;
        this.clearance90 = clearance90;
        this.aerialsWon90 = aerialsWon90;

    }

    public double getTackles90(){
        return this.tackles90;
    }

    public double getInterceptions90(){
        return this.interceptions90;
    }

    public double getBlocks90(){
        return this.blocks90;
    }

    public double getClearance90(){
        return this.clearance90;
    }

    public double getAerialsWon90(){
        return this.aerialsWon90;
    }
}
