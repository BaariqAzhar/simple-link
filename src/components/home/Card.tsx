import { linkGithub, linkInstagram, linkLinkedin, name } from "@/constants/envVariables";
import styles from "@/styles/Home.module.css";
import { GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { Button, Card as CardAntd } from 'antd';

export default function Card() {
    return (
        <CardAntd title={`${name}`} variant="borderless" style={{ width: 300 }}>
            <div className={`${styles.buttonContainer}`}>
                <Button
                    type="primary"
                    size="large"
                    icon={<LinkedinFilled />}
                    className={`${styles.linkedinButton}`}
                    onClick={() => {
                        window.open(`${linkLinkedin}`, "_blank");
                    }}
                >
                    LinkedIn
                </Button>
            </div>
            <div className={`${styles.buttonContainer}`}>
                <Button
                    type="primary"
                    size="large"
                    icon={<GithubFilled />}
                    className={`${styles.githubButton}`}
                    onClick={() => {
                        window.open(`${linkGithub}`, "_blank");
                    }}
                >
                    Github
                </Button>
            </div>
            <div className={`${styles.buttonContainer}`}>
                <Button
                    type="primary"
                    size="large"
                    icon={<InstagramFilled />}
                    className={`${styles.instagramButton}`}
                    onClick={() => {
                        window.open(`${linkInstagram}`, "_blank");
                    }}
                >
                    Instagram
                </Button>
            </div>
        </CardAntd>
    )
}