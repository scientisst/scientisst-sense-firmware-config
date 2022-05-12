function getDeviceData() {
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            nvsData = JSON.parse(this.responseText);
            console.log(nvsData.bitalinoInfo);
        }
    };
    xmlHTTP.open("GET", "/nvs", true);
    xmlHTTP.send();
    return xmlHTTP.onreadystatechange();
}

$("#form").on("submit", function (e) {
    const channelsButtons = [1, 2, 3, 4, 5, 6].map((channel) => {
        return document.getElementById("ai" + channel);
    });
    const channels = []
    channelsButtons.forEach((channel, index) => {
        if (channel.checked) {
            channels.push(index + 1);
        }
    });
    $("#channels").val(channels);//change input

    const digitalChannels = [];
    $("#o1")[0].checked ? digitalChannels.push(1) : digitalChannels.push(0);
    $("#o2")[0].checked ? digitalChannels.push(1) : digitalChannels.push(0);
    $("#digital_channels").val(digitalChannels);//change input

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
});

// getDeviceData();

// setTimeout(() => {
//     const deviceSettings = document.getElementById("device-settings").shadowRoot;
//     const samplingRate = deviceSettings.getElementById("samplingRate");
//     const channelsButtons = [1, 2, 3, 4, 5, 6].map((channel) => {
//         return deviceSettings.getElementById("ai" + channel);
//     });

//     const submit = deviceSettings.getElementById("submit");
//     submit.addEventListener('click', async _ => {
//         const channels = []
//         channelsButtons.forEach((channel, index) => {
//             if (channel.checked) {
//                 channels.push(index + 1);
//             }
//         });
//         data = {
//             samplingRate: parseInt(samplingRate.value),
//             channels: channels,
//         };
//         try {
//             const response = await fetch('settingsDone', {
//                 method: 'post',
//                 body: data,
//             });
//             console.log('Completed!', data, response);
//         } catch (err) {
//             console.error(`Error: ${err}`);
//         }
//     });
// }, 100)