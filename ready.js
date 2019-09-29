module.exports = (client) => {
    client.user.setActivity(`en dev`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/fai"})
            .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
            .catch(console.error);
        };
