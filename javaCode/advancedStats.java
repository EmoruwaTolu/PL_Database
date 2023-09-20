package javaCode;
public class advancedStats {
    
    private attackingStats playerAttackingStats;
    private defensiveStats playerDefensiveStats;
    private creativeStats playerCreativeStats;

    public advancedStats(attackingStats playerAttackingStats, defensiveStats playerDefensiveStats, creativeStats playerCreativeStats){

        this.playerAttackingStats = playerAttackingStats;
        this.playerCreativeStats = playerCreativeStats;
        this.playerDefensiveStats = playerDefensiveStats;

    }

    public attackingStats getAttackingStats(){
        return this.playerAttackingStats;
    }

    public creativeStats getCreativeStats(){
        return this.playerCreativeStats;
    }

    public defensiveStats getDefensiveStats(){
        return this.playerDefensiveStats;
    }
}
