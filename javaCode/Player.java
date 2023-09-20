package javaCode;
public class Player{

    private advancedStats playerAdvancedStats;
    private keeperStats keepsStats;
    //private String position;

    private String playerName;

    public Player(String playerName, advancedStats playerAdvancedStats ){

        this.playerName = playerName;
        this.playerAdvancedStats = playerAdvancedStats;

    }

    public Player(String playerName){
        this.playerName = playerName;
    }

    public Player(String playerName, keeperStats keeps){
        this.keepsStats = keeps;
        this.playerName =  playerName;
    }

    public String getPlayerName(){
        return this.playerName;
    }

    public advancedStats getAdvancedStats() throws Exception{
        if(keepsStats != null) throw new Exception("Player is a goalkeeper, there are no stats, try getKeeperStats()");
        return this.playerAdvancedStats;
    }

    public void setAdvancedStats(advancedStats playersNewAdvancedStats) throws Exception{
        if(keepsStats != null) throw new Exception("You cannot give a goalkeeper outfield stats");
        this.playerAdvancedStats = playersNewAdvancedStats;
    }

    public keeperStats getKeeperStats() throws Exception{
        if(playerAdvancedStats!=null) throw new Exception("Player is not a Goalkeeper");
        return keepsStats;
    }

    public void setKeeperStats() throws Exception{
        if(playerAdvancedStats != null) throw new Exception("You cannot give an outfield player goalkeeping stats");
    }

}