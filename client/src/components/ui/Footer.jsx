import React from "react";

import styles from "./ui.module.css";

const Footer = () => {
    return (
        <div className={styles["footer-wrapper"]}>
            <div className={styles["contact-info"]}>
                <h3>Contact</h3>
                <a href="mailto:sambasivareddychinta@gmail.com">
                    Email: sambasivareddychinta@gmail.com
                </a>
                <a href="tel:+917337375243">Phone Number: 7337375243</a>
                <a href="https://sambasiva.vercel.app/">Visit my Portfolio</a>
            </div>
            <div className={styles["gvpce-map"]}>
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15193.550087465024!2d83.342295!3d17.8204597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bedc7efb603%3A0x87c06caab54e902a!2sGayatri%20Vidya%20Parishad%20College%20of%20Engineering%20(Autonomous)%20(GVP)%20(GVPCE)!5e0!3m2!1sen!2sin!4v1679220564610!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                ></iframe> */}
            </div>
        </div>
    );
};

export default Footer;
