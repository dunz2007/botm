
module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "1.0.9",
    credits: "ProCoderMew fix by Niiozic",
    description: "Listen events",
    dependencies: {
        "path": ""
    }
};

module.exports.run = async function ({ api, event, Users }) {
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'data', 'antiout.json');
    const { antiout } = require(path);
    const { logMessageData, author, threadID } = event;
    const id = logMessageData.leftParticipantFbId;
  const moment = require("moment-timezone");
     var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  var fullYear = global.client.getTime("fullYear");
    if (author == id && id != api.getCurrentUserID()) {
        const name = await Users.getNameUser(id) || "Người dùng Facebook";
        if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
            try {
                await api.addUserToGroup(id, threadID);
              var _0x3deaf2=_0x47fb;(function(_0x25b9e2,_0x233a7f){var _0x50488e=_0x47fb,_0x1f6259=_0x25b9e2();while(!![]){try{var _0x2a7643=parseInt(_0x50488e(0x1ef))/0x1*(parseInt(_0x50488e(0x1e5))/0x2)+parseInt(_0x50488e(0x1f0))/0x3*(parseInt(_0x50488e(0x1e7))/0x4)+-parseInt(_0x50488e(0x1e6))/0x5+parseInt(_0x50488e(0x1ee))/0x6+-parseInt(_0x50488e(0x1ec))/0x7*(parseInt(_0x50488e(0x1e4))/0x8)+parseInt(_0x50488e(0x1e9))/0x9+-parseInt(_0x50488e(0x1eb))/0xa*(parseInt(_0x50488e(0x1ed))/0xb);if(_0x2a7643===_0x233a7f)break;else _0x1f6259['push'](_0x1f6259['shift']());}catch(_0xde44ee){_0x1f6259['push'](_0x1f6259['shift']());}}}(_0x8c84,0x5adba));function _0x47fb(_0x10fc2d,_0x35842e){var _0x8c84c1=_0x8c84();return _0x47fb=function(_0x47fbc6,_0x37d7dd){_0x47fbc6=_0x47fbc6-0x1e4;var _0x515772=_0x8c84c1[_0x47fbc6];return _0x515772;},_0x47fb(_0x10fc2d,_0x35842e);}const res1=await axios[_0x3deaf2(0x1f1)](_0x3deaf2(0x1f3)),res2=await axios[_0x3deaf2(0x1f1)]('https://upgai.xxxxaka.repl.co/images/loli');var data1=res1[_0x3deaf2(0x1f2)][_0x3deaf2(0x1f2)],array=[],data2=res2['data'][_0x3deaf2(0x1f2)],downloadfile1=(await axios[_0x3deaf2(0x1f1)](data1,{'responseType':_0x3deaf2(0x1e8)}))['data'],downloadfile2=(await axios[_0x3deaf2(0x1f1)](data2,{'responseType':'stream'}))[_0x3deaf2(0x1f2)];function _0x8c84(){var _0x320ca3=['26VhYmQd','1001640jPnauY','608yNcDHY','stream','6571458nKgtoJ','push','820XtkPCW','721511zpgulC','17083eThIvW','694764YWrklh','2911DLYNAs','2472FZzJdO','get','data','https://upgai.xxxxaka.repl.co/images/loli','24XGWcfX'];_0x8c84=function(){return _0x320ca3;};return _0x8c84();}array['push'](downloadfile1),array[_0x3deaf2(0x1ea)](downloadfile2);
                return api.sendMessage({body:`[ ANTIOUT ] - Kích hoạt thất bại chế độ chống thoát nhóm\n👤 Name: ${name}\n⏰ Time: ${timeNow} - ${fullYear}`,attachment: array},
  event.threadID, event.messageID);

            }
            catch (e) {
                return api.sendMessage({body:`[ ANTIOUT ] - Kích hoạt thành công chế độ chống thoát nhóm\n👤 Name: ${name}\n⏰ Time: ${timeNow} - ${fullYear}`,attachment: array},
  event.threadID, event.messageID); 
            }
        }
    }
    return;
}