

var tessel = true;


if (process.env.QTEST) {
    tessel = false;
}

module.exports = {

    USE_ADMIN: false,
    USE_NETWORK: false,

    TESSEL: tessel,
    TESSEL_VERSION: 1,
    SERVER_PORT: 8080,

    INTERVAL: 20000,
    NTP_OFFSET: 0,
    TIMEZONE_OFFSET: 2,
    HW_LAG: 70,

    OUTER: 58,
    INNER: 56,

    //OUTER_COLOR: [60,126,216], // lila GRB
    //INNER_COLOR: [152,255,0], // sarga GRB

    //OUTER_COLOR: [0,255,228], // pink GRB
    //INNER_COLOR: [225,53,40], //  zold GRB

    //OUTER_COLOR: [138,255,0], // narancs GRB
    //INNER_COLOR: [26,0,225], //  kek GRB

    //OUTER_COLOR: [255,10,0], // zold GRB
    //INNER_COLOR: [247,255,0], // sarga GRB


    OUTER_COLOR: [0,225,53], // piros GRB
    INNER_COLOR: [212,166,255], // 'ezust' GRB

    NONE_COLOR: [0,0,0],

    DIM_FROM: 20,
    DIM_TO: 6,
    DIM_VALUE: 0.1,

    DEMO_COUNTER: 0,

    NETWORK: {
        ssid: 'majesticWLAN',
        password: 'atreides'
    }
}