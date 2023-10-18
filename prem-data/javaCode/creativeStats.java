package javaCode;
public class creativeStats {

    private double passAttempt90;
    private String passCompletePercent90;
    private double progressivePass90;
    private double dribblesComp90;
    private double touches90;
    private double progPassRec90;
    
    public creativeStats(double passAttempt90, String passCompletePercent90, double progressivePass90, double dribblesComp90,
    double touches90, double progPassRec90){

        this.passAttempt90 = passAttempt90;
        this.passCompletePercent90 = passCompletePercent90;
        this.progressivePass90 = progressivePass90;
        this.dribblesComp90 = dribblesComp90;
        this.touches90 = touches90;
        this.progPassRec90 = progPassRec90;

    }

    public double getPassAttempt90(){
        return this.passAttempt90;
    }

    public String getPassCompletePercent90(){
        return this.passCompletePercent90;
    }

    public double getProgressivePass90(){
        return this.progressivePass90;
    }

    public double getDribblesComp90(){
        return this.dribblesComp90;
    }

    public double getTouches90(){
        return this.touches90;
    }

    public double getProgPassRec90(){
        return this.progPassRec90;
    }
}
