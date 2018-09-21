import React from 'react';
import Link from 'gatsby-link';

const Faq = (props) => {
    return (
        <section className="section section--white section--thin">
            <div className="supportpages">
                <div className="support--sidebar">
                    <div className="section-info">
                        <h1 className="section--text-red">Frequently Asked Questions</h1>
                        <ul className="support--links">
                            <li className="support-outline">
                                <a  href="#otln1">Keep your privacy!</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln1-1">Caution Beware of malicious sites</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln2">Users code of conduct</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln2-1">Game Ethics</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln3">Account Issues</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln3-1">Keep login data safe</a></li>
                                    <li><a href="#otln3-2">Can I delete my account</a></li>
                                    <li><a href="#otln3-3">Another device is connecting</a></li>
                                    <li><a href="#otln3-4">Why can't I change my name</a></li>
                                    <li><a href="#otln3-5">Will WordCosmos employeess ask for my password</a></li>
                                    <li><a href="#otln3-6">My device is not supported</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln4">Account Issues (Android)</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln4-1">How do I backup my game progress in Android?</a></li>
                                    <li><a href="#otln4-2">Can I transfer my account in a new Android device?</a></li>
                                    <li><a href="#otln4-3">Save game with Google Play</a></li>
                                    <li><a href="#otln4-4">How can I stop Google alerts?</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln5">Account Issues (IOS)</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln5-1">How do I backup my game progress in iOS?</a></li>
                                    <li><a href="#otln5-2">Can I transfer my account in a new iOS device?</a></li>
                                    <li><a href="#otln5-3">Stop Game Center Alerts</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln6">Lost Account</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln6-1">How to recover my lost account?</a></li>
                                    <li><a href="#otln6-2">Game is not loading even when connected to Game Center or Google Play.</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln7">Gold, Star, XP, Gacha, Daily Chest</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln7-1">What is gacha?</a></li>
                                    <li><a href="#otln7-2">How to earn gold, stars and XP?</a></li>
                                    <li><a href="#otln7-3">What is Daily Chest?</a></li>
                                    <li><a href="#otln7-4">Can I buy gold, star and XP outside the game?</a></li>
                                    <li><a href="#otln7-5">My purchase was canceled!</a></li>
                                    <li><a href="#otln7-6">Where do I see my purchase history?</a></li>
                                    <li><a href="#otln7-7">I can't make an order!</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln8">Connection & Preformance</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln8-1">Why is connection always lost?</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln9">Battle</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln9-1">How are Stars calculated?</a></li>
                                    <li><a href="#otln9-2">How does battle matching work?</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln10">Troubleshooting</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln10-1">My game keeps on crashing.</a></li>
                                    <li><a href="#otln10-2">I can't hear the sound effects!</a></li>
                                    <li><a href="#otln10-3">I want to disable push notifications.</a></li>
                                    <li><a href="#otln10-4">Can I listen to my own music while playing?</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln11">Purchase Guide</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln11-1">Can I get a refund?</a></li>
                                    <li><a href="#otln11-2">Is there an age limit for Word Cosmos users?s</a></li>
                                    <li><a href="#otln11-3">Can I buy in-game products from another site?</a></li>
                                    <li><a href="#otln11-4">Where do I see my purchase history?</a></li>
                                    <li><a href="#otln11-5">I can't make an order!</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln12">Contact Us</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln12-1">How to Contact us</a></li>
                                </ul>
                            </li>
                            <li className="support-outline">
                                <a  href="#otln13">Word Cosmos Facts</a>
                                <ul className="sub-outlines">
                                    <li><a href="#otln13-1">Is WordCosmos adapting American or British English?</a></li>
                                    <li><a href="#otln13-2">Text-to-Speech Function</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="support--main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div id="otln1" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Keep your privacy!</h1>
                                    <div id="otln1-1" className="outline-info">
                                        <h1 className="section--text-gray">Caution Beware of malicious sites</h1>
                                        <p>
                                            Don't be a victim of scams. 
                                            If you come across players offering free golds, characters, stars and XP, it's a scam!
                                            These people are trying to trick you into giving out personal information like e-mail accounts, passwords and credit card information for their own benefit.
                                            Moreover, these people make it seem like they are legitimate, sending you links or attachments containing viruses and deceptive e-mails that can bring harm to your privacy and device safety.
                                            We don't want you to be a victim! We urge you, our beloved users, to ensure you are connected to an authorized <a href="https://www.frecre.com/en/wordcosmos/">Word Cosmos</a> site or support.
                                            Never share your personal data even with Word Cosmos staff. Remember, a real Word Cosmos staff would never ask for your password.
                                            Also, please consider your own email security, and do not reply to unsolicited e-mails that invite you to launch a web hyperlink, attachment or even provide log in information.
                                            If you think you've been a victim of scams, change your e-mail password and contact your e-mail provider immediately.
                                            We're working on creating precautionary measures for it but in the meantime, please beware.
                                        </p>
                                    </div>
                                </div>
                                <div id="otln2" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Users code of conduct</h1>
                                    <div id="otln2-1" className="outline-info">
                                        <h1 className="section--text-gray">Game Ethics</h1>
                                        <p>Hacking, scams or even phising are some malicious activities that allow the unauthorized intrusion to a device to access passwords and personal data.</p>
                                        <p>We don't want that to happen to you. In order to keep yourself and your account protected from these threats,<br />we urge you to remember the FOUR DONT'S below:</p>
                                        <p>1. Don't share your account info (Game Center/Play Store), or passwords with anyone - not even to us! Word Cosmos staff will never ask for your login details.<br />2. Don't or if possible limit logging your account on other's device. <br />3. Don't buy stuff (e.g. stars, gold, characters) outside the game. <br />4. Don't trust sites that offer freebies.</p>
                                        <p>If you notice any malicious activities in your account, change your passwords immediately and report to your service providers.</p>
                                    </div>
                                </div>
                                <div id="otln3" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Account Issues</h1>
                                    <div id="otln3-1" className="outline-info">
                                        <h1 className="section--text-gray">Keep login data safe</h1>
                                        <p>Hacking, scams or even phishing are some malicious activities that allow the unauthorized intrusion to a device to access passwords and personal data.<br />We don't want that to happen to you. In order to keep yourself and your account protected from these threats,<br />we urge you to remember the FOUR DONT'S below:</p>
                                        <p>1. Don't share your account info (Game Center/Play Store), or passwords with anyone - not even to us! Word Cosmos staff will never ask for your login details.<br />2. Don't or if possible limit logging your account on other's device. <br />3. Don't buy stuff (e.g. stars, gold, characters) outside the game. <br />4. Don't trust sites that offer freebies.</p>
                                        <p>If you notice any malicious activities in your account, change your passwords immediately and report to your service providers.</p>
                                    </div>
                                    <div id="otln3-2" className="outline-info">
                                        <h1 className="section--text-gray">can I delete my account</h1>
                                        <p>It's a regret to say this but players can't delete their game accounts.<br />Word Cosmos does not store information on game servers and has no access to any personal or private information about Martians, thus, it is quite impossible to delete account.</p>
                                        <p>However, should you need help with a game center account that you no longer need, you may contact us. Just follow the steps below:<br />1. Go to Settings<br />2. Select 'Contact Us'</p>
                                    </div>
                                    <div id="otln3-3" className="outline-info">
                                        <h1 className="section--text-gray">another device is connecting</h1>
                                        <p>If a pop-up says you've lost connection due to another device connecting, it means your game is being accessed from another device at the same time. Please check if anyone you know, like a friend or family member is playing your game on a device that your account has been loaded on.</p>
                                        <p>If you continue getting this pop-up and see unexpected changes occurring in your game, please contact us with a detailed description of what's been occurring on your account.</p>
                                    </div>
                                    <div id="otln3-4" className="outline-info">
                                        <h1 className="section--text-gray">Why can't I change my name?</h1>
                                        <p>We regret to inform you that certain charges apply to change in-game name.<br />To change your account name, follow the steps below:<br />1. Go to your current name profile.<br />2. Change your name.<br />3. Pay with gold.</p>
                                        <p>You should be able to change your name once payment is done.</p>
                                    </div>
                                    <div id="otln3-5" className="outline-info">
                                        <h1 className="section--text-gray">Will Word Cosmos employees ask for my passwords?</h1>
                                        <p>No. Never.<br />Please keep in mind that Word Cosmos employees will never ask for any login details or passwords. <br />Never share your Game Center, Google Play, Facebook account information and passwords or any other personal information with anyone. <br />This is a clear attempt of compromising your accounts.</p>
                                        <p>Should you receive malicious messages or e-mails asking for your personal or account information, please report it immediately.</p>
                                    </div>
                                    <div id="otln3-6" className="outline-info">
                                        <h1 className="section--text-gray">My device is not supported!</h1>
                                        <p>We regret to inform you that we will only support the following devices below due to technical issues.</p>
                                        <p>&gt;Apple devices running from iOS 8 and up<br />&gt;Android devices running from Android 4.0.4 and up.</p>
                                        <p>Please update your device update to a newer iOS or Android version if your device runs on lower versions specified above.<br />Updating iOS or Android can be found in <a href="https://support.apple.com/">Apple Support</a> Website or <a href="https://support.google.com/">Google Help.</a></p>
                                    </div>
                                </div>
                                <div id="otln4" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Account Issues (Android)</h1>
                                    <div id="otln4-1" className="outline-info">
                                        <h1 className="section--text-gray">How do I backup my game progress in Android?</h1>
                                        <p>Save your game progress with Google Play! Here's how:</p>
                                        <p>1. Go to Google Play app.<br />2. Log in e-mail account. (Please note that this cannot be changed in the future.)<br />3. Go to game, and enter in-game settings.<br />4. Press Google Play sign in button to connect your game to Google Play.<br />Your game is now set to save automatically.</p>
                                        <p>Remember, only one game can be saved per Google Play account.<br />Having multiple games per account may result to lost game progress.</p>
                                    </div>
                                    <div id="otln4-2" className="outline-info">
                                        <h1 className="section--text-gray">Can I transfer my account in a new Android device?</h1>
                                        <p>Yes! Through Google Play, you can transfer your existing game to a new android device. <br />Please note that Google Play only supports one game per account.</p>
                                        <p>Device A (old device)<br />First, let us verify that your game is connected to Google Play:<br />1. Log into Google Play on Device A.<br />2. Go to &ldquo;Settings&rdquo;.<br />3. Select the Google Play sign in button to connect.<br />4. Open the game</p>
                                        <p>Device B (old device)<br />Now, grab Device B:<br />4. Log into the same Google Play account on Device B.<br />5. Download the game from the Play Store.<br />6. Sign in using to Google Play.</p>
                                    </div>
                                    <div id="otln4-3" className="outline-info">
                                        <h1 className="section--text-gray">Save game with Google Play</h1>
                                        <p>If a pop-up says you've lost connection due to another device connecting, it means your game is being accessed from another device at the same time. Please check if anyone you know, like a friend or family member is playing your game on a device that your account has been loaded on.</p>
                                        <p>If you continue getting this pop-up and see unexpected changes occurring in your game, please contact us with a detailed description of what's been occurring on your account.</p>
                                    </div>
                                    <div id="otln4-4" className="outline-info">
                                        <h1 className="section--text-gray">How can I stop Google alerts?</h1>
                                        <p><br />Tired of getting Google Alerts?<br />Your device could have been connected to another <a href="https://support.google.com/">Google Play</a> account so it keeps on asking to load a different game.<br />To stop the alerts, follow these:</p>
                                        <p>1. Go to device Settings<br />2. Choose Accounts<br />3. Add or sign in correct account<br />4. Restart device</p>
                                        <p>If these steps do not work, and your Google Play account feels like it's connected to someone else&rsquo;s game, please contact us. We&rsquo;ll do our best to help.</p>
                                    </div>
                                </div>
                                <div id="otln5" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Account Issues (IOS)</h1>
                                    <div id="otln5-1" className="outline-info">
                                        <h1 className="section--text-gray">How do I backup my game progress in iOS?</h1>
                                        <p>&nbsp;</p>
                                        <p>Make sure you have connected your game to Game Center, otherwise, you won't be able to retrieve it in any device.<br />It is the only way to save, recover and sync your progress.</p>
                                        <p>Here's how to save your progress:</p>
                                        <p>1. Go to your device Settings.<br />2. Select Game Center.<br />3. Select Apple ID<br />4. Log in or create an Apple ID for yourself.<br />5. Exit to Home Screen and re-launch the game.</p>
                                        <p>Note: In launching the game, you should be able to see "Welcome back" message on top of the screen with your Game Center profile name!</p>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div id="otln5-2" className="outline-info">
                                        <h1 className="section--text-gray">Can I transfer my account in a new iOS device?</h1>
                                        <p>For iOS to iOS devices, well, Yes!<br />Thanks to iOS' Game Center. You can link your account through your unique Game Center account. <br />In your old device, make sure your game is registered in Game Center.<br />If not, follow the steps below:</p>
                                        <p>Device A (old device)<br />1. Go to your device settings.<br />2. Select the Game Center.<br />3. Log in using your Apple ID (or create one if you don't have any).<br />4. Open game.<br />Once game is opened, a message popup with a &ldquo;welcome back, your name&rdquo; is showed.</p>
                                        <p>Device B (new device)<br />In your new device, download the game, and follow the steps below:</p>
                                        <p>5. Go to Device Settings.<br />6. Select Game Center.<br />7. Enter the same Apple ID from previous device.<br />8. Open the game.<br />9. Confirm to load saved game.</p>
                                        <p>Note: Make sure you are NOT sharing a Game Center account with somebody else.</p>
                                    </div>
                                    <div id="otln5-3" className="outline-info">
                                        <h1 className="section--text-gray">Stop Game Center Alerts</h1>
                                        <p>For iOS devices, you might notice Game Center Alerts that keep on popping up. <br />When this happens, your Game Center account might have been already used or logged on for another game. <br />To stop these alerts, follow the steps below:</p>
                                        <p>1. Go to your phone Settings.<br />2. Select Game Center.<br />3. Sign out of the current account.<br />4. Sign in with your own Game Center account.</p>
                                        <p>Remember, only one game can be connected to your Game Center account and it can never be undone. <br />If your current game is not linked to any Game Center account, it will be impossible to retrieve your game record on other devices.</p>
                                        <p>If nothing still works, and you feel like your Game Center account is connected to someone else&rsquo;s game, please contact us and we'll do our best to help.</p>
                                    </div>
                                </div>
                                <div id="otln6" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Lost Account</h1>
                                    <div id="otln6-1" className="outline-info">
                                        <h1 className="section--text-gray">How to recover my lost account?</h1>
                                        <p>Here are quick steps to recover your lost account.<br />Just be careful in loading multiple accounts on a single device since you might lose access to one them along the way.</p>
                                        <p>A. Connected to Google+/Google Play Account (Android)<br />1. Connect the correct Google Play account to your device.<br />2. In game settings, tap Google Play button.<br />3. Tap 'Yes' if the account loaded on the device is correct.</p>
                                        <p>B. Connected to Game Center Account (iOS)</p>
                                        <p>1. Go device settings and find Game Center.<br />2. Tap AppleID.<br />3. Log using e-mail address used to save the game.<br />4. Launch the game again</p>
                                        <p>C. It's not working at all! What do I do?</p>
                                        <p>If none of the above steps worked, then please go to Contact Us button in Settings or chat us.<br />Kindly provide the following details:<br />1. Username and userID<br />2. XP level and Stars<br />3. Explain how the account was lost.</p>
                                    </div>
                                    <div id="otln6-2" className="outline-info">
                                        <h1 className="section--text-gray">Game is not loading even when connected to Game Center or Google Play.</h1>
                                        <p>It&rsquo;s extremely important to use the correct credentials when logging in, so please make sure you&rsquo;re connecting to the right Game Center account. <br />If you can&rsquo;t prompt your desired account with the e-mail address you&rsquo;re using now, that means you are not using the right one.<br />Access your accounts properly to avoid troubles and loss of account.</p>
                                        <p>iOS<br />Make sure your Game Center account is correct.<br />If the account you want doesn't connect, it means the e-mail address used is not correct.</p>
                                        <p>1. Go to Game Center found in Settings of device.<br />2. Login using original e-mail address to link account.<br />3. If it&rsquo;s an old email, and nothing works, it's best to contact <a href="https://support.apple.com/">Apple Support</a> to recover account information.</p>
                                        <p>Android<br />1. Add the correct Google Play account to device<br />2. In game settings, tap &lsquo;Google Play Sign-in&rsquo;.<br />3. Connect correct e-mail address used to link with game account.<br />4. If it&rsquo;s an old e-mail, and nothing works, it's best to contact <a href="https://support.google.com/">Google Support</a> to recover account information.</p>
                                        <p>Word Cosmos has no access into the account information of your Game Center account. <br />In order to recover your account, you need to get the correct login details linked with your game.</p>
                                    </div>
                                </div>
                                <div id="otln7" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Gold, Star, XP, Gacha, Daily Chest</h1>
                                    <div id="otln7-1" className="outline-info">
                                        <h1 className="section--text-gray">What is gacha?</h1>
                                        <p>Gacha is a virtual version of toy vending machines where one pays and gets an unexpected character or reward.<br />You get a gacha in the shop in exchange for 100 coins.</p>
                                        <p>If you are lucky, you can get awesome characters that through Gacha at a low cost.<br />When you win more, you earn more gold coins to buy Gacha.</p>
                                    </div>
                                    <div id="otln7-2" className="outline-info">
                                        <h1 className="section--text-gray">How to earn gold, stars and XP?</h1>
                                        <p>GOLD<br />Golds are earned through Daily Chests, Gold offers and when you play with friends.<br />You can unlock new characters, or buy gacha in the game through golds.</p>
                                        <p>STARS<br />Stars are trophies earned when you win every game. <br />As your level progresses, trophies also increase. However, if you lose, your trophy also decreases.</p>
                                        <p>XP or Experience<br />Experience are points you earn to move to a higher level.<br />It is gained through battle (offline or pvp).<br />XP is the blue diamond found on the left part of the screen.<br />As your XP increases, level and gold limit also increases.<br />Thus, the more you play, the more gold you get and the faster you level up.</p>
                                        <p>Note: Gold, Stars and XP cannot be bought outside the game. If you meet someone selling these items, please report it to us immediately.</p>
                                    </div>
                                    <div id="otln7-3" className="outline-info">
                                        <h1 className="section--text-gray">What is Daily Chest?</h1>
                                        <p>Daily Chest allows you to get free gold rewards every day. If rank goes up, so will Daily Chest rewards.<br />Open Daily Chest everyday to get free gold!</p>
                                    </div>
                                    <div id="otln7-4" className="outline-info">
                                        <h1 className="section--text-gray">Can I buy gold, star and XP outside the game?</h1>
                                        <p><br />NOPE. Definitely, not.</p>
                                        <p>For a secured transaction, buy gold and other items in the in-game shop and process it through iTunes or Google.<br />Word Cosmos is not affiliated to any third party websites offering in-game currencies (e.g. gold, XP, characters).<br />Should you find websites like these, please ignore them and never give your login credentials for your account's security.</p>
                                        <p>If you bought currencies outside the game and problems occurred, unfortunately, we cannot assist you any further.<br />Furthermore, we reserve the right to ban accounts with currencies bought from third party websites.</p>
                                    </div>
                                    <div id="otln7-5" className="outline-info">
                                        <h1 className="section--text-gray">Where do I see my purchase history?</h1>
                                        <p>&nbsp;</p>
                                        <p>If you want to view your purchases, check the details below:</p>
                                        <p>iOS<br />1. Go iTunes on your computer. <br />2. Tap your username (in this case, e-mail address)<br />3. Tap &ldquo;Account&rdquo;<br />4. Choose &ldquo;Purchase History&rdquo; then &ldquo;See All&rdquo;.</p>
                                        <p>ANDROID<br />1. Go to Google Payments (payments.google.com)<br />2. Login Google account<br />3. Select &ldquo;Transactions&rdquo;</p>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div id="otln7-6" className="outline-info">
                                        <h1 className="section--text-gray">My purchase was canceled!</h1>
                                        <p>Don't worry. No charges will be applied for that order.<br />The canceled purchase may be caused by a difference of bank, billing address or registered name in your Google Wallet or iTunes.<br />Google Play may put a "reservation" status on your credit card temporarily with the same value.<br />Just confirm bank details and log into Google Payments and verify information.</p>
                                        <p>In iOS, you can view purchase history in iTunes store.<br />For problems, please contact iTunes Support.</p>
                                    </div>
                                    <div id="otln7-7" className="outline-info">
                                        <h1 className="section--text-gray">I can't make an order!</h1>
                                        <p>iOS<br />If you are having trouble with payments in iOS, make sure to check the following below:<br />1. Configure device settings before making an order.<br />2. Contact iTunes Support for orders that has been processing for 24 hrs.<br />3. Check iTunes in-app purchase restriction guide to identify error in ordering.</p>
                                        <p>ANDROID<br />Please be reminded that Google handles all payments done through Google Play Store. <br />Therefore, for purchasing issues, please consult Google Support.</p>
                                        <p>If payment methond is &ldquo;not eligible&rdquo;, please follow the steps below:<br />1. Go to payments.google.com<br />2. Select Payment Methods<br />3. For credit/debit card, check the expiration date &amp; billing address<br />4. Make sure the billing country and legal country matches</p>
                                        <p>If none of these worked out, please try a different payment method.</p>
                                    </div>
                                </div>
                                <div id="otln8" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Connection & Performance</h1>
                                    <div id="otln8-1" className="outline-info">
                                        <h1 className="section--text-gray">Why is connection always lost?</h1>
                                        <p>Why is connection always lost?</p>
                                        <p>Word Cosmos Player-to-Player (pvp or Find Match) requires a reliable and stable internet for a smooth experience.<br />A solid 3G/4G connection from a reliable service provider may be needed to guarantee stability of connection.<br />However, if your connection is not stable, you can always play the OFFLINE mode and gain more XP.</p>
                                    </div>
                                </div>
                                <div id="otln9" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Battle</h1>
                                    <div id="otln9-1" className="outline-info">
                                        <h1 className="section--text-gray">How are Stars calculated?</h1>
                                        <p>How are Stars calculated?</p>
                                        <p>Stars are trophies that determine your rank in the game.<br />Initially, twenty (20) stars are gained and lost during PvP or Online battle.<br />However, as you progress in the game, more stars are gained and of course, more stars are also lost in battle.<br />The amount of stars won or lost depends on your enemy's stars.<br />For example, if you win against a player who has more stars than you, you will get more stars.<br />On the contrary, losing against a player with fewer stars makes you also lose more.</p>
                                        <p>Stars are found in the right most part of your profile.</p>
                                    </div>
                                    <div id="otln9-2" className="outline-info">
                                        <h1 className="section--text-gray">How does battle matching work?</h1>
                                        <p>In 'Find Match', a stable internet connection is needed to fight against other players.<br />You will play against players of the same planet as yours.<br />You will fight against other players regardless of your XP or trophies.</p>
                                    </div>
                                </div>
                                <div id="otln10" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">My game keeps on crashing.</h1>
                                    <div id="otln10-1" className="outline-info">
                                        <h1 className="section--text-gray">My game keeps on crashing.</h1>
                                        <p>If your game keeps on crashing, try the troubleshooting tips below:<br />1. Check the latest version of the game.<br />2. Check phone version. (Word Cosmos supports Android OS 4.4 up and iOS 8 versions and up.)<br />2. Close unused applications.<br />3. Uninstall unneeded apps, videos, photos to free up device memory.</p>
                                        <p>If the game still crashes, please contact us through <a href="mailto:support@frecre.com?subject=[Crash Report]">support@frecre.com.</a></p>
                                    </div>
                                    <div id="otln10-2" className="outline-info">
                                        <h1 className="section--text-gray">I can't hear the sound effects!</h1>
                                        <p>There are plenty of reasons why you can't hear the sound effects.</p>
                                        <p>GAME SETTINGS<br />You can start by checking the game settings.<br />1. Make sure the SFX/ BGM or sounds are ON.<br />2. Make sure you have the latest version of the game.<br />2. If the settings are okay, but there are still no sounds, try to restart.<br />3. Quit the game and open again.</p>
                                        <p>PHONE SETTINGS<br />If the game setting does not work, please try the following:<br />1. Make sure Mute is OFF.<br />2. Try plugging in, and unplugging some earphones.<br />3. Try opening another app, and check sounds.<br />4. If the sounds are not working in another app, there might be a problem in the device.<br />Note: You can also check <a href="https://support.apple.com/">Apple Support</a> for sound problems.</p>
                                    </div>
                                    <div id="otln10-3" className="outline-info">
                                        <h1 className="section--text-gray">I want to disable push notifications.</h1>
                                        <p>Annoyed by notifications? Try to disable alerts and push notifications through the following:<br />1. Go to device Settings.<br />2. Select &ldquo;Notifications&rdquo;<br />3. Select Word Cosmos from the Application list.<br />4. Turn OFF the notification.</p>
                                    </div>
                                    <div id="otln10-4" className="outline-info">
                                        <h1 className="section--text-gray">I can't hear the sound effects!</h1>
                                        <p>We totally understand that you want to listen to your own soundtrack when playing the game.<br />Just follow the steps below to enjoy both our game and your music.<br />1. Go to in-game settings and turn off the music.<br />2. Go to your device music and start playing your music.<br />3. Re-launch Word Cosmos.</p>
                                    </div>
                                </div>
                                <div id="otln11" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Purchase Guidelines</h1>
                                    <div id="otln11-1" className="outline-info">
                                        <h1 className="section--text-gray">Can I get a refund?</h1>
                                        <p>In-app purchases are basically non-refundable but in rare cases, exceptions can be made.<br />If you or your child accidently purchased something, you can try the steps that follow.</p>
                                        <p>iOS<br />For purchases made with Apple (iOS) device, WORD COSMOS has no direct access for refunds.<br />Kindly follow the steps below.<br />1. Please visit <a href="https://support.apple.com/">Apple Support</a><br />2. Check <a href="https://support.apple.com/itunes">"Contact iTunes Store Support"</a>.<br />3. Select <a href="https://support.apple.com/itunes">"Purchases, billing and redemption"</a>.</p>
                                        <p>ANDROID<br />For purchases made with Google (ANDROID) device, please follow the steps below.<br />1. Go to Word Cosmos settings.<br />2. Select 'Contact Us' and choose your inquiry.<br />3. You will be redirected to our e-mail (support@frecre.com).<br />4. Please state the name of the purchase and add the receipt or transaction ID of the purchase.</p>
                                    </div>
                                    <div id="otln11-2" className="outline-info">
                                        <h1 className="section--text-gray">Is there an age limit for Word Cosmos users?</h1>
                                        <p>Well, yes. Generally, Word Cosmos is offered to people who are at least 13 years of age according also to Google Play and App Store recommendations.<br />Know more about our Terms of Service and Privacy Policy.</p>
                                    </div>
                                    <div id="otln11-3" className="outline-info">
                                        <h1 className="section--text-gray">Can I buy in-game products from another site?s</h1>
                                        <p>NOPE. Definitely, not.</p>
                                        <p>For a secured transaction, buy gold and other items in the in-game shop and process it through iTunes or Google.<br />Word Cosmos is not affiliated to any third party websites offering in-game currencies (e.g. gold, XP, characters).<br />Should you find websites like these, please ignore them and never give your login credentials for your account's security.</p>
                                        <p>If you bought currencies outside the game and problems occurred, unfortunately, we cannot assist you any further.<br />Furthermore, we reserve the right to ban accounts with currencies bought from third party websites.</p>
                                    </div>
                                    <div id="otln11-4" className="outline-info">
                                        <h1 className="section--text-gray">Where do I see my purchase history?</h1>
                                        <p>If you want to view your purchases, check the details below:</p>
                                        <p>iOS<br />1. Go iTunes on your computer. <br />2. Tap your username (in this case, e-mail address)<br />3. Tap &ldquo;Account&rdquo;<br />4. Choose &ldquo;Purchase History&rdquo; then &ldquo;See All&rdquo;.</p>
                                        <p>ANDROID<br />1. Go to <a href="payments.google.com">Google Payments</a> <br />2. Login Google account<br />3. Select &ldquo;Transactions&rdquo;</p>
                                    </div>
                                    <div id="otln11-5" className="outline-info">
                                        <h1 className="section--text-gray">I can't make an order!</h1>
                                        <p>iOS<br />If you are having trouble with payments in iOS, make sure to check the following below:<br />1. Configure device settings before making an order.<br />2. Contact <a href="https://support.apple.com/itunes">iTunes Support</a> for orders that has been processing for 24 hrs.<br />3. Check iTunes in-app purchase restriction guide to identify error in ordering.</p>
                                        <p>ANDROID<br />Please be reminded that Google handles all payments done through Google Play Store. <br />Therefore, for purchasing issues, please consult <a href="https://support.google.com/">Google Support.</a></p>
                                        <p>If payment methond is &ldquo;not eligible&rdquo;, please follow the steps below:<br />1. Go to <a href="payments.google.com">payments.google.com</a><br />2. Select Payment Methods<br />3. For credit/debit card, check the expiration date &amp; billing address<br />4. Make sure the billing country and legal country matches</p>
                                        <p>If none of these worked out, please try a different payment method.</p>
                                    </div>
                                </div>
                                <div id="otln12" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Contact Us</h1>
                                    <div id="otln12-1" className="outline-info">
                                        <h1 className="section--text-gray">How to Contact us</h1>
                                        <p>If you find that none of our FAQ answers your questions or nothing really works, please go to 'Contact Us' button in Settings.<br />You can also visit our website to chat with our support.</p>
                                        <p>In your message, it's best to include the following information ahead:<br />1. Exact userID and username of account<br />2. Last login date of account<br />3. XP level of account<br />4. Your message<br />Please don't hesitate to contact us. We will do our best to help.</p>
                                    </div>
                                </div>
                                <div id="otln13" className="main-content-info">
                                    <h1 className="title__text-md section--text-red">Word Cosmos Facts</h1>
                                    <div id="otln13-1" className="outline-info">
                                        <h1 className="section--text-gray">Is WordCosmos adapting American or British English?</h1>
                                        <p>Word Cosmos is adapting American English.<br />You can expect that Word Cosmos questions and words are adapting the American English (AmE, AE, AmEng, USEng, en-US) in both spelling and speech functions.</p>
                                    </div>
                                    <div id="otln13-2" className="outline-info">
                                        <h1 className="section--text-gray">Text-to-Speech Function</h1>
                                        <p>You might find some inaccuracy and irregularity in the pronunciation of words inside Word Cosmos game. <br />Word Cosmos is using Google's Text-to-Speech function but we are doing our best to check the quality of our pronunciation.<br />We are continously working in improving the content of our system.<br />We hope you'll bear with it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
                            
export default Faq
