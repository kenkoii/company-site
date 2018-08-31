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
                                            We don't want you to be a victim! We urge you, our beloved users, to ensure you are connected to an authorized Word Cosmos site or support.
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
                                        <p>Please update your device update to a newer iOS or Android version if your device runs on lower versions specified above.<br />Updating iOS or Android can be found in Apple Support Website or Google Help.</p>
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
