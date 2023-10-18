package javaCode;
public class keeperCommandStats {

    private String crossesStoppedPercent;
    private double defActionsOutsidePenArea90;
    private double avgDistofDefActions;
    
    public keeperCommandStats(String crossesStoppedPercent, double defActionsOutsidePenArea90, double avgDistofDefActions ){
        this.crossesStoppedPercent = crossesStoppedPercent;
        this.defActionsOutsidePenArea90 = defActionsOutsidePenArea90;
        this.avgDistofDefActions = avgDistofDefActions;
    }

    public String getCrossesStoppedPercent(){
        return this.crossesStoppedPercent;
    }

    public double getDefActionsOutsidePenArea90(){
        return this.defActionsOutsidePenArea90;
    }

    public double getAvgDistofDefActions(){
        return this.avgDistofDefActions;
    }
}
