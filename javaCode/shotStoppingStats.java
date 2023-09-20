package javaCode;
public class shotStoppingStats {
    
    private double postShotxGvsGA90;
    private double goalsAgainst90;
    private String savePercentage;
    private double postShotxGvsSoT90;
    private String penaltySave;
    private String cleanSheetPercent;

    public shotStoppingStats(double postShotxGvsGA, double goalsAgainst90, String savePercentage, double postShotxGvsSoT, 
    String penaltySave, String cleanSheetPercent){

        this.postShotxGvsGA90 = postShotxGvsGA;
        this.goalsAgainst90 = goalsAgainst90;
        this.savePercentage = savePercentage;
        this.postShotxGvsSoT90 = postShotxGvsSoT;
        this.penaltySave = penaltySave;
        this.cleanSheetPercent = cleanSheetPercent;

    }

    public double getPostShotxGvsGA90(){
        return postShotxGvsGA90;
    }

    public double getGoalsAgainst90(){
        return goalsAgainst90;
    }

    public String getSavePercentage(){
        return savePercentage;
    }

    public double getPostShotxGvsSoT90(){
        return postShotxGvsSoT90;
    }

    public String getPenaltySave(){
        return penaltySave;
    }

    public String getCleanSheetPercent(){
        return cleanSheetPercent;
    }
}
