import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./a-i-v-a-c-hatbot-u-i-blank.module.css";

const AIVACHatbotUIBlank = () => {
  return (
    <div className={styles.aivaChatbotUiBlank}>
      <FrameComponent1 />
      <main className={styles.frameParent}>
        <FrameComponent />
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.regenerateResponseButtonParent}>
                  <div className={styles.regenerateResponseButton}>
                    <div className={styles.comeUpWith}>
                      Come up with concepts
                    </div>
                    <div className={styles.forARetro}>
                      for a retro style arcade game
                    </div>
                  </div>
                  <div className={styles.regenerateResponseButton1}>
                    <div className={styles.explainWhyPopcorn}>
                      Explain why popcorn pops
                    </div>
                    <div className={styles.toAKid}>
                      to a kid who loves to watch in the microvawe
                    </div>
                  </div>
                  <div className={styles.regenerateResponseButton2}>
                    <div className={styles.planATrip}>Plan a trip</div>
                    <div className={styles.toSeeThe}>
                      to see the nothern lights in norway
                    </div>
                  </div>
                  <div className={styles.regenerateResponseButton3}>
                    <div className={styles.giveMeIdeas}>Give me ideas</div>
                    <div className={styles.forWhatTo}>
                      for what to do with my kid’s art
                    </div>
                  </div>
                  <div className={styles.regenerateResponseButton4}>
                    <div className={styles.comeUpWith1}>
                      Come up with concepts
                    </div>
                    <div className={styles.forARetro1}>
                      for a retro style arcade game
                    </div>
                  </div>
                  <div className={styles.regenerateResponseButton5}>
                    <div className={styles.explainWhyPopcorn1}>
                      Explain why popcorn pops
                    </div>
                    <div className={styles.toAKid1}>
                      to a kid who loves to watch in the microvawe
                    </div>
                  </div>
                </div>
                <div className={styles.inputParent}>
                  <div className={styles.input}>
                    <div className={styles.sendAMessage}>Send a message...</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <button className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <button className={styles.regenerateResponseButton6}>
                <div className={styles.wrapperVector}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
                <div className={styles.uploadDocsHere}>Upload Docs here</div>
              </button>
              <div className={styles.supportedPdfTxtCsvDocxWrapper}>
                <h2 className={styles.supportedPdfTxtContainer}>
                  <p className={styles.supported}>
                    <b>{`Supported: `}</b>
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.pdfTxtCsv}>pdf, txt, csv, docx, xlsx</p>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIVACHatbotUIBlank;
