package javaCode;
public class keeperPassing {

    private double touches90;
    private String launchPercentage;
    private double goalKicks90;
    private double avgGoalKickLen;
    
    public keeperPassing(double touches90, String launchPercentage, double goalKicks90, double avgGoalKickLen){
        this.touches90 = touches90;
        this.launchPercentage = launchPercentage;
        this.goalKicks90 = goalKicks90;
        this.avgGoalKickLen =  avgGoalKickLen;
    }

    public double getTouches90(){
        return this.touches90;
    }

    public String getLaunchPercentage(){
        return this.launchPercentage;
    }

    public double getGoalKicks90(){
        return this.goalKicks90;
    }

    public double getAvgGoalKickLen(){
        return this.avgGoalKickLen;
    }
}
