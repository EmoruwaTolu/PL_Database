package javaCode;
public class attackingStats {

    private double nonPenGoals90;
    private double nonPenXG90;
    private double shots90;
    private double assists90;
    private double xAG;
    private double nonPenXGAG90;
    private double shotCreateAct90;
    
    public attackingStats(double nonPenGoals90, double nonPenXG90, double shots90, double assists90, double xAG, double nonPenXGAG90, double shotCreateAct90){
        this.nonPenGoals90 = nonPenGoals90;
        this.nonPenXG90 = nonPenXG90;
        this.shots90 = shots90;
        this.assists90 = assists90;
        this.xAG = xAG;
        this.nonPenXGAG90 = nonPenXGAG90;
        this.shotCreateAct90 = shotCreateAct90;
    }

    public double getNonPenGoals90(){
        return this.nonPenGoals90;
    }

    public double getNonPenXG90(){
        return this.nonPenXG90;
    }

    public double getShots90(){
        return this.shots90;
    }

    public double getAssists90(){
        return this.assists90;
    }

    public double getXAG(){
        return this.xAG;
    }

    public double getNonPenXGAG90(){
        return this.nonPenXGAG90;
    }

    public double getShotCreateAct90(){
        return this.shotCreateAct90;
    }
}
