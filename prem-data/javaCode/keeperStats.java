package javaCode;
public class keeperStats {

    private shotStoppingStats shotStopping;
    private keeperPassing passing;
    private keeperCommandStats command;
    
    public keeperStats(shotStoppingStats shotStopping, keeperPassing passing, keeperCommandStats command){
        this.shotStopping = shotStopping;
        this.passing = passing;
        this.command = command;
    }

    public shotStoppingStats getShotStoppingStats(){
        return this.shotStopping;
    }

    public keeperPassing getKeeperPassingStats(){
        return this.passing;
    }

    public keeperCommandStats getKeeperCommandStats(){
        return this.command;
    }
}
