import classes from './MainBlock.module.css';
import React from "react";

import fbIcon from '../../../assets/images/fb.png'
import ytIcon from '../../../assets/images/yt.png'
import twitterIcon from '../../../assets/images/twitter.png'
import instIcon from '../../../assets/images/inst.png'

import secondAdv from '../../../assets/images/group2.png'
import thirdAdv from '../../../assets/images/group3.png'
import fourthAdv from '../../../assets/images/group4.png'
let MainBLock = (props) => {

    return (
        <div className={classes.mainBlock}>
            <div className={classes.firstMainBlock}>
                <div className={classes.info}>
                    <div className={classes.title}>Организация семинаров и коучингов <span>под ключ</span>
                    </div>
                    <div className={classes.subtitle}>Оставьте заявку до <strong>10 октября</strong> и получите в
                        порадок
                        кейтеринг <strong>на 10 персон</strong></div>
                    <div className={classes.list}>
                        <div className={classes.listItem}>Конференции</div>
                        <div className={classes.listItem}>Тимбилдинги и корпоративы</div>
                        <div className={classes.listItem}>Бизнес-завтраки</div>
                    </div>
                    <div className={classes.infoFooter}>
                        <button className={classes.btn}>Оставить заявку</button>
                        <div className={classes.links}>
                        <span className={classes.linkItem}>
                           <img src={fbIcon} alt=""/>
                        </span>
                            <span className={classes.linkItem}>
                            <img src={twitterIcon} alt=""/>
                        </span>
                            <span className={classes.linkItem}>
                              <img src={instIcon} alt=""/>
                        </span>
                            <span className={classes.linkItem}>
                           <img src={ytIcon} alt=""/>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.line}/>
            <div className={classes.secondMainBlock}>
                <div className={classes.title}>4 Главных преимущества</div>
                <div className={classes.subtitle}><span>Благодаря</span> которым нам доверили уже 473 семнинаров и коучингов
                </div>
                <div className={classes.advantageList}>
                    <div className={classes.advantageItem}>
                        <div className={classes.advantageIcon}>
                            <svg width="65" height="75" viewBox="0 0 65 75" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.85845 38.9197L7.85834 38.9201L6.30697 44.7005C6.10118 45.4679 6.5577 46.2595 7.32932 46.4653L7.32973 46.4654L13.1247 48.0147L7.85845 38.9197ZM7.85845 38.9197C8.12941 37.9077 7.83881 36.82 7.09496 36.0781L2.85277 31.8469C2.28833 31.284 2.28833 30.3729 2.85277 29.81L7.09496 25.5788C7.83912 24.8366 8.12915 23.7489 7.85859 22.7356L7.85832 22.7346L6.30697 16.9563C6.30695 16.9562 6.30692 16.9561 6.3069 16.956C6.10127 16.1887 6.55778 15.3972 7.32932 15.1914L7.32979 15.1913M7.85845 38.9197L7.32979 15.1913M18.5302 56.8931L18.5338 56.8922L24.3274 55.3448L24.3304 55.344C25.3496 55.0763 26.4299 55.3601 27.1752 56.1058L27.1749 56.1056L26.6452 56.6366L27.1759 56.1066L31.4171 60.3367C31.7 60.6189 32.0692 60.7598 32.4409 60.7598C32.8127 60.7598 33.182 60.6188 33.4646 60.3368L33.4647 60.3367L37.7059 56.1066C38.447 55.3645 39.536 55.0785 40.5488 55.3439L40.5521 55.3448L46.3478 56.8922L46.3497 56.8927C47.1295 57.103 47.914 56.6453 48.1206 55.8734L48.1208 55.8727L49.6741 50.0928L18.5302 56.8931ZM18.5302 56.8931C17.7693 57.1004 16.9688 56.6439 16.7608 55.8726L18.5302 56.8931ZM57.5519 46.4655L57.5523 46.4653C58.3239 46.2595 58.7804 45.4681 58.5747 44.7007C58.5747 44.7006 58.5747 44.7006 58.5747 44.7005L57.0233 38.9222L57.0231 38.9212C56.7525 37.9078 57.0425 36.8201 57.7867 36.0779L62.0289 31.8468C62.5933 31.2838 62.5933 30.3728 62.0289 29.8098L57.7867 25.5787C57.0428 24.8368 56.7522 23.749 57.0232 22.7371L57.0233 22.7367L58.5747 16.9563C58.7805 16.1888 58.3239 15.3972 57.5523 15.1914L57.5519 15.1913L51.7569 13.6421C50.7431 13.372 49.9457 12.5775 49.6743 11.5626C49.6742 11.5622 49.6741 11.5618 49.674 11.5614L48.1209 5.78448L57.5519 46.4655ZM57.5519 46.4655L51.7595 48.0146M57.5519 46.4655L51.7595 48.0146M40.5422 6.31517L40.5421 6.31507C39.5283 6.56781 38.4507 6.29889 37.7047 5.54915L37.6978 5.54217L37.6978 5.54213L33.4605 1.16993C32.8961 0.61125 31.9853 0.611246 31.4208 1.16991L27.1835 5.54213L27.1747 5.55127L27.1746 5.55119C26.4276 6.29625 25.3419 6.57234 24.3361 6.31372L24.3294 6.31199L24.3294 6.31196L18.5385 4.76585C18.5378 4.76567 18.5371 4.76548 18.5364 4.7653C17.764 4.56578 16.9662 5.0225 16.7607 5.78404L40.5422 6.31517ZM40.5422 6.31517L40.5542 6.31194M40.5422 6.31517L40.5542 6.31194M40.5542 6.31194L46.3426 4.76594C46.3434 4.76574 46.3442 4.76555 46.3449 4.76535M40.5542 6.31194L46.3449 4.76535M7.32979 15.1913L13.122 13.6422C13.1222 13.6421 13.1224 13.6421 13.1226 13.642M7.32979 15.1913L13.1226 13.642M15.2076 50.0948C14.9363 49.0799 14.1391 48.2851 13.1254 48.0149L15.2076 50.0948ZM15.2076 50.0948C15.2076 50.095 15.2077 50.0952 15.2077 50.0953L16.7607 55.8723L15.2076 50.0948ZM51.7595 48.0146C50.7437 48.2844 49.9458 49.0788 49.6743 50.0922L51.7595 48.0146ZM46.3449 4.76535C47.1328 4.56226 47.9144 5.01865 48.1208 5.7841L46.3449 4.76535ZM13.1226 13.642C14.1381 13.3721 14.9357 12.5777 15.2072 11.5646L13.1226 13.642ZM15.2074 11.5639L16.7606 5.7845L15.2074 11.5639ZM50.7692 30.8284C50.7692 20.7451 42.5458 12.546 32.441 12.546C22.3362 12.546 14.1129 20.7451 14.1129 30.8284C14.1129 40.9116 22.3362 49.1107 32.441 49.1107C42.5458 49.1107 50.7692 40.9116 50.7692 30.8284Z"
                                    stroke="#E9AA09" strokeWidth="1.5"/>
                                <path
                                    d="M53.4579 65.6624L53.0797 65.685L52.8735 66.0029L48.069 73.4096C47.8009 73.813 47.3465 74.0554 46.8616 74.0554H46.8615H46.8613H46.8612H46.8611H46.861H46.8608H46.8607H46.8606H46.8605H46.8603H46.8602H46.8601H46.86H46.8598H46.8597H46.8596H46.8595H46.8593H46.8592H46.8591H46.859H46.8588H46.8587H46.8586H46.8585H46.8583H46.8582H46.8581H46.858H46.8578H46.8577H46.8576H46.8575H46.8573H46.8572H46.8571H46.857H46.8568H46.8567H46.8566H46.8565H46.8563H46.8562H46.8561H46.856H46.8558H46.8557H46.8556H46.8554H46.8553H46.8552H46.8551H46.8549H46.8548H46.8547H46.8546H46.8544H46.8543H46.8542H46.8541H46.8539H46.8538H46.8537H46.8536H46.8534H46.8533H46.8532H46.8531H46.8529H46.8528H46.8527H46.8526H46.8524H46.8523H46.8522H46.8521H46.8519H46.8518H46.8517H46.8516H46.8514H46.8513H46.8512H46.851H46.8509H46.8508H46.8507H46.8505H46.8504H46.8503H46.8502H46.85H46.8499H46.8498H46.8497H46.8495H46.8494H46.8493H46.8492H46.849H46.8489H46.8488H46.8487H46.8485H46.8484H46.8483H46.8482H46.848H46.8479H46.8478H46.8476H46.8475H46.8474H46.8473H46.8471H46.847H46.8469H46.8468H46.8466H46.8465H46.8464H46.8463H46.8461H46.846H46.8459H46.8458H46.8456H46.8455H46.8454H46.8452H46.8451H46.845H46.8449H46.8447H46.8446H46.8445H46.8444H46.8442H46.8441H46.844H46.8439H46.8437H46.8436H46.8435H46.8433H46.8432H46.8431H46.843H46.8428H46.8427H46.8426H46.8425H46.8423H46.8422H46.8421H46.842H46.8418H46.8417H46.8416H46.8414H46.8413H46.8412H46.8411H46.8409H46.8408H46.8407H46.8406H46.8404H46.8403H46.8402H46.84H46.8399H46.8398H46.8397H46.8395H46.8394H46.8393H46.8392H46.839H46.8389H46.8388H46.8386H46.8385H46.8384H46.8383H46.8381H46.838H46.8379H46.8378H46.8376H46.8375H46.8374H46.8372H46.8371H46.837H46.8369H46.8367H46.8366H46.8365H46.8364H46.8362H46.8361H46.836H46.8358H46.8357H46.8356H46.8355H46.8353H46.8352H46.8351H46.8349H46.8348H46.8347H46.8346H46.8344H46.8343H46.8342H46.8341H46.8339H46.8338H46.8337H46.8335H46.8334H46.8333H46.8332H46.833H46.8329H46.8328H46.8326H46.8325H46.8324H46.8323H46.8321H46.832H46.8319H46.8317H46.8316H46.8315H46.8314H46.8312H46.8311H46.831H46.8308H46.8307H46.8306H46.8305H46.8303H46.8302H46.8301H46.8299H46.8298H46.8297H46.8296H46.8294H46.8293H46.8292H46.829H46.8289H46.8288H46.8287H46.8285H46.8284H46.8283H46.8281H46.828H46.8279H46.8277H46.8276H46.8275H46.8274H46.8272H46.8271H46.827H46.8268H46.8267H46.8266H46.8265H46.8263H46.8262H46.8261H46.8259H46.8258H46.8257H46.8255H46.8254H46.8253H46.8252H46.825H46.8249H46.8248H46.8246H46.8245H46.8244H46.8243H46.8241H46.824H46.8239H46.8237H46.8236H46.8235H46.8233H46.8232H46.8231H46.8229H46.8228H46.8227H46.8226H46.8224H46.8223H46.8222H46.822H46.8219H46.8218H46.8216H46.8215H46.8214H46.8213H46.8211H46.821H46.8209H46.8207H46.8206H46.8205H46.8203H46.8202H46.8201H46.8199H46.8198H46.8197H46.8196H46.8194H46.8193H46.8192H46.819H46.8189H46.8188H46.8186H46.8185H46.8184H46.8182H46.8181H46.818H46.8178H46.8177H46.8176H46.8175H46.8173H46.8172H46.8171H46.8169H46.8168H46.8167H46.8165H46.8164H46.8163H46.8161H46.816H46.8159H46.8157H46.8156H46.8155H46.8153H46.8152H46.8151H46.8149H46.8148H46.8147H46.8145H46.8144H46.8143H46.8142H46.814H46.8139H46.8138H46.8136H46.8135H46.8134H46.8132H46.8131H46.813H46.8128H46.8127H46.8126H46.8124H46.8123H46.8122H46.812H46.8119H46.8118H46.8116H46.8115H46.8114H46.8112H46.8111H46.811H46.8108H46.8107H46.8106H46.8104H46.8103H46.8102H46.81H46.8099H46.8098H46.8096H46.8095H46.8094H46.8092H46.8091H46.809H46.8088H46.8087H46.8086H46.8084H46.8083H46.8082H46.808H46.8079C46.3125 74.0365 45.8586 73.7642 45.6081 73.335C45.6076 73.3342 45.6072 73.3334 45.6068 73.3327L39.5179 62.675L40.7296 61.4665L44.8706 62.5724C44.8708 62.5725 44.871 62.5725 44.8712 62.5726C45.4988 62.7415 46.1455 62.8272 46.7929 62.8272C50.1061 62.8272 53.0171 60.5942 53.8732 57.3959C53.8732 57.3959 53.8732 57.3958 53.8732 57.3958L54.9858 53.2582L57.3449 52.628L63.3376 62.9813C63.5875 63.4136 63.5955 63.9456 63.3592 64.3833L63.3587 64.3842C63.1221 64.8239 62.6736 65.1104 62.1704 65.1401L62.1698 65.1402L53.4579 65.6624Z"
                                    stroke="#E9AA09" strokeWidth="1.5"/>
                                <path
                                    d="M1.64071 64.3831L1.6412 64.384C1.87791 64.8239 2.32643 65.1104 2.82939 65.14L2.83018 65.14L11.542 65.6622L11.9202 65.6849L12.1264 66.0027L16.931 73.4096C17.199 73.813 17.6534 74.0552 18.1383 74.0552H18.1385H18.1386H18.1387H18.1388H18.139H18.1391H18.1392H18.1393H18.1395H18.1396H18.1397H18.1398H18.14H18.1401H18.1402H18.1403H18.1405H18.1406H18.1407H18.1408H18.141H18.1411H18.1412H18.1413H18.1415H18.1416H18.1417H18.1418H18.142H18.1421H18.1422H18.1423H18.1425H18.1426H18.1427H18.1428H18.143H18.1431H18.1432H18.1433H18.1435H18.1436H18.1437H18.1438H18.144H18.1441H18.1442H18.1444H18.1445H18.1446H18.1447H18.1449H18.145H18.1451H18.1452H18.1454H18.1455H18.1456H18.1457H18.1459H18.146H18.1461H18.1462H18.1464H18.1465H18.1466H18.1467H18.1469H18.147H18.1471H18.1472H18.1474H18.1475H18.1476H18.1477H18.1479H18.148H18.1481H18.1482H18.1484H18.1485H18.1486H18.1488H18.1489H18.149H18.1491H18.1493H18.1494H18.1495H18.1496H18.1498H18.1499H18.15H18.1501H18.1503H18.1504H18.1505H18.1506H18.1508H18.1509H18.151H18.1511H18.1513H18.1514H18.1515H18.1516H18.1518H18.1519H18.152H18.1522H18.1523H18.1524H18.1525H18.1527H18.1528H18.1529H18.153H18.1532H18.1533H18.1534H18.1535H18.1537H18.1538H18.1539H18.154H18.1542H18.1543H18.1544H18.1546H18.1547H18.1548H18.1549H18.1551H18.1552H18.1553H18.1554H18.1556H18.1557H18.1558H18.1559H18.1561H18.1562H18.1563H18.1565H18.1566H18.1567H18.1568H18.157H18.1571H18.1572H18.1573H18.1575H18.1576H18.1577H18.1578H18.158H18.1581H18.1582H18.1584H18.1585H18.1586H18.1587H18.1589H18.159H18.1591H18.1592H18.1594H18.1595H18.1596H18.1598H18.1599H18.16H18.1601H18.1603H18.1604H18.1605H18.1606H18.1608H18.1609H18.161H18.1612H18.1613H18.1614H18.1615H18.1617H18.1618H18.1619H18.162H18.1622H18.1623H18.1624H18.1626H18.1627H18.1628H18.1629H18.1631H18.1632H18.1633H18.1634H18.1636H18.1637H18.1638H18.164H18.1641H18.1642H18.1643H18.1645H18.1646H18.1647H18.1649H18.165H18.1651H18.1652H18.1654H18.1655H18.1656H18.1657H18.1659H18.166H18.1661H18.1663H18.1664H18.1665H18.1666H18.1668H18.1669H18.167H18.1672H18.1673H18.1674H18.1675H18.1677H18.1678H18.1679H18.1681H18.1682H18.1683H18.1684H18.1686H18.1687H18.1688H18.169H18.1691H18.1692H18.1693H18.1695H18.1696H18.1697H18.1699H18.17H18.1701H18.1702H18.1704H18.1705H18.1706H18.1708H18.1709H18.171H18.1711H18.1713H18.1714H18.1715H18.1717H18.1718H18.1719H18.1721H18.1722H18.1723H18.1724H18.1726H18.1727H18.1728H18.173H18.1731H18.1732H18.1733H18.1735H18.1736H18.1737H18.1739H18.174H18.1741H18.1743H18.1744H18.1745H18.1746H18.1748H18.1749H18.175H18.1752H18.1753H18.1754H18.1755H18.1757H18.1758H18.1759H18.1761H18.1762H18.1763H18.1765H18.1766H18.1767H18.1768H18.177H18.1771H18.1772H18.1774H18.1775H18.1776H18.1778H18.1779H18.178H18.1782H18.1783H18.1784H18.1785H18.1787H18.1788H18.1789H18.1791H18.1792H18.1793H18.1795H18.1796H18.1797H18.1799H18.18H18.1801H18.1802H18.1804H18.1805H18.1806H18.1808H18.1809H18.181H18.1812H18.1813H18.1814H18.1816H18.1817H18.1818H18.182H18.1821H18.1822H18.1823H18.1825H18.1826H18.1827H18.1829H18.183H18.1831H18.1833H18.1834H18.1835H18.1837H18.1838H18.1839H18.1841H18.1842H18.1843H18.1845H18.1846H18.1847H18.1849H18.185H18.1851H18.1852H18.1854H18.1855H18.1856H18.1858H18.1859H18.186H18.1862H18.1863H18.1864H18.1866H18.1867H18.1868H18.187H18.1871H18.1872H18.1874H18.1875H18.1876H18.1878H18.1879H18.188H18.1882H18.1883H18.1884H18.1886H18.1887H18.1888H18.189H18.1891H18.1892H18.1894H18.1895H18.1896H18.1898H18.1899H18.19H18.1902H18.1903H18.1904H18.1906H18.1907H18.1908H18.191H18.1911H18.1912H18.1914H18.1915H18.1916H18.1918H18.1919H18.192C18.6875 74.0363 19.1413 73.7641 19.3919 73.3348C19.3923 73.334 19.3927 73.3333 19.3932 73.3325L25.482 62.6749L24.2703 61.4663L20.1206 62.5739C20.12 62.5741 20.1194 62.5743 20.1188 62.5744C19.5123 62.7393 18.8652 62.8272 18.2157 62.8272C14.9033 62.8272 11.988 60.5972 11.1272 57.4011L11.127 57.4007L10.0142 53.258L7.65563 52.627L1.66229 62.9811L1.64071 64.3831ZM1.64071 64.3831C1.40445 63.9455 1.41237 63.4137 1.66209 62.9815L1.64071 64.3831Z"
                                    stroke="#E9AA09" strokeWidth="1.5"/>
                                <path
                                    d="M41.1371 30.3901C41.1371 35.3983 37.0772 39.4582 32.069 39.4582C27.0608 39.4582 23.0009 35.3983 23.0009 30.3901C23.0009 25.3819 27.0608 21.322 32.069 21.322C37.0772 21.322 41.1371 25.3819 41.1371 30.3901Z"
                                    stroke="#E9AA09" strokeWidth="1.5"/>
                            </svg>
                        </div>
                        <div className={classes.advantageText}>
                            <div className={classes.advantageItemTitle}>Многолетний опыт</div>
                            <div className={classes.advantageItemSubTitle}>Занимаемся профессиональной организацией с 2006 года
                            </div>
                        </div>
                    </div>
                    <div className={classes.advantageItem}>
                        <div className={classes.advantageIcon}>
                            <img src={secondAdv} alt=""/>
                        </div>
                        <div className={classes.advantageText}>
                            <div className={classes.advantageItemTitle}>473 мероприятий</div>
                            <div className={classes.advantageItemSubTitle}>Именно столько бизнес семинаров мы провели за 13 лет работы
                            </div>
                        </div>
                    </div>
                    <div className={classes.advantageItem}>
                        <div className={classes.advantageIcon}>
                            <img src={thirdAdv} alt=""/>
                        </div>
                        <div className={classes.advantageText}>
                            <div className={classes.advantageItemTitle}>Снимаем все оргвопросы</div>
                            <div className={classes.advantageItemSubTitle}>Брендирование пространства, кейтеринг, входная зона, фото и видео, размещение гостей
                            </div>
                        </div>
                    </div>
                    <div className={classes.advantageItem}>
                        <div className={classes.advantageIcon}>
                            <img src={fourthAdv} alt=""/>
                        </div>
                        <div className={classes.advantageText}>
                            <div className={classes.advantageItemTitle}>Сильная IT-сторона</div>
                            <div className={classes.advantageItemTitle}>Каждый шаг фиксируется в CRM, к которой у вас будет доступ, чтобы все контролировать
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

};
export default MainBLock;