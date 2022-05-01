import axios from "axios";
import cheerio from "cheerio";

const getHtml = async () => {
    try {
        return await axios.get("https://www.donkey.fund/main");
    } catch (err) {
        console.log(err);
    }
};

const parsing = async () => {
    const html: any = await getHtml();
    const $ = cheerio.load(html.data);
    const $tokenList = $(
        "div.styles__DesktopComponentsContainer-sc-1y2c9ek-0.dCUCet"
    );

    const tokens = [];
    $tokenList.each((idx, node) => {
        const token = $(node)
            .find(
                "#__next > div.styles__DisplayDesktopWrapper-sc-51v392-1.gAWGcq > div.styles__DesktopComponentsContainer-sc-1y2c9ek-0.dCUCet > div.styles__RightContainer-sc-1wdg0w7-2.eQuolN > div.styles__MainContentContainer-sc-1wdg0w7-3.eUrave > div.styles__BottomContainer-sc-1wdg0w7-1.iydxAr > div.styles__MarketSectionContainer-sc-1wdg0w7-5.wKNhZ > div:nth-child(1) > div:nth-child(5) > div.styles__QuantityInfoContainer-sc-1lcftep-4.gaNwwL > p.styles__TokenValue-sc-1lcftep-6.kAtIic > span"
            )
            .text();
        console.log(token);
    });

    console.log(html.data);
};

parsing();
