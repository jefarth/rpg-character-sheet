module.exports = {
    matchUserId: (player, user_id) => {
        if(player.user_id === user_id) {
            return true;
        } else {
            return false;
        }
    }
}