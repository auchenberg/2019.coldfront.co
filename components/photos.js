import WideSection from "./wideSection";

export default ({ children }) => (
  <div>
    <div className="photos">
      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-5 col-lg-5 bloc-img">
          <a
            href="https://www.flickr.com/photos/97226415@N08/27096591319/in/album-72157689274484261/"
            className="image1"
            target="_blank"
          />
        </div>

        <div className="col-xxs-12 col-xs-6 col-sm-3 col-lg-3 bloc-img">
          <a
            href="https://www.flickr.com/photos/97226415@N08/25001964208/in/album-72157689274484261/"
            className="image2"
            target="_blank"
          />
        </div>

        <div className="col-xxs-12 col-xs-6 col-sm-4 col-lg-4 bloc-img">
          <a
            href="https://www.flickr.com/photos/97226415@N08/27096575399/in/album-72157689274484261/"
            className="image3"
            target="_blank"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-3 col-lg-3 bloc-img">
          <a
            href="https://www.flickr.com/photos/97226415@N08/38158029394/in/album-72157689274484261/"
            className="image6"
            target="_blank"
          />
        </div>

        <div className="col-xxs-12 col-xs-6 col-sm-4 col-lg-4 bloc-img ">
          <a
            href="https://www.flickr.com/photos/97226415@N08/25001964948/in/album-72157689274484261/"
            className="image4"
            target="_blank"
          />
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-5 col-lg-5 bloc-img">
          <a
            href="https://www.flickr.com/photos/97226415@N08/24008382867/in/album-72157689274484261/"
            className="image5"
            target="_blank"
          />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .photos {
          border-bottom: 4px solid #fff;
          @media (max-width: 1000px) {
            padding: 0;
            h2 {
              font-size: 30px;
            }
          }
        }

        .photos {
          .col,
          [class*="col-"] {
            padding-right: 0;
            padding-left: 0;
          }
        }

        .photos .bloc-img {
          height: 400px;
          overflow: hidden;
        }

        .photos .bloc-img a {
          -webkit-background-size: cover;
          background-size: cover;
          background-position: 50%;
          width: 100%;
          height: 100%;
          display: block;

          background-position: top;
          border-top: 4px solid #fff;
          //   background: red;
        }

        .image1 {
          border-right: 4px solid #fff;
          background: #000
            url(https://lh3.googleusercontent.com/17ki7UYKR-i40LenpWHkY8YBCa1FYZtolpaoUer_ssjHDkCZwNPyjSs8fSuYh8UhGleNCLT_1OGz51Yn5DijmvmTQF2CdBo0U63FrAKQwXb2veYQ5qM0PU1h_Cqa-DTQSPBMaG6EC660bhEu7s0V6Q0bEWIuusaWDd8PTGxXXZHZcOhc5IPuY8HbQmQRaJRaLbB_CZqF8aCM1xxiYXNaowHPfa0WbMaaACxoZFqR8t9GgRGD4yMhY0qnwQal-dOXJ-riScSlA5AxqXqOK9EsKHbs2D0KZ4bh8rYheTKpXHhEqmzsXdAzW1aMM4Omn4bG6-zCgJ-IOym3wZpHmm5MGGOPlZqLkzfqVV8zNsHkNFBGkj6CJPiEghnmYjl9aA855rG4GwZeMDU6iE9IIxBaJIEaZeGift-JDjsbD86tYG9JLPv5YSXLHcYmEDZcjDabWsP5ioqZddzNsuX2dJexxiSm7S0wLDOylvbvmNdJRz6cijx8SURG5scgtX_j_TutP0iAFkwgFf3tTz2u8PhMiwNvgrOWxkoi2ASoHJvmJRKhxRur4_hVCykbbMQOswllFmp9mzCVIxVaJ-9U8Pz2j5ezBl3LytTnCjlxe1pcx6opYclu_TPFOPzwASCI8c0I9cjXERaC46p7LmcQ21_sA3_iDc6ftHvqgrfO3Iaf4HSdCaLDAglmNhTIsLNiVPBuM3TCMmszD8qan7jqEAYrIU__3A=w2800-h1530-no)
            no-repeat;
        }

        .image5 {
          border-right: 4px solid #fff;
          background: #000
            url(https://lh3.googleusercontent.com/1TbzMM-MRxreG2c__E3VZLCCM-kGOXOIrry8fHWS48LLeWcsKB3e0XIecHBOMupShUII3OiUgUCVFoRstkTDrmDC_Gbyq1wdtuEXK3X6zTFYo3e5NIx11l88UV5nAg67766elJkqbW09Qt2DBZs9ADFXq3TQt4xQrqenlTD15nIc9AAFmcapE0EF6AWu2v95pM3eVi4TZ8G8DQs9ZPZJUhNBIH9zqoh2UN-pGfu8aqW_QVzqlBBwN_7i9DrYLuhT78-kz6vqy_PBDwp4th_HkPmoyS4SgFG7YnZBo66vniGDikWXtOfKYMBG5wzhSOaM8DeA9Atwunb1iBnlxTOvC-VmCs0Iphc8CaSjIC6Upoj1tQMRmrIOuHgsB8SnFn7FNSx0wX17nXGY7GN9SqkXpWCWNmIevapvhrDlBSc6MrcUEowZ1MalTlDOZcISXFRxqL3Cn9T4hFHYmz9SQep5rblkNLSZ16n2XcLql6C8-mYwZgQDXCQhxS6oGUqPvr7URqbA8bBecG-lRKSDiVEApaUpBnrQZbQ7wFLXRhTK4xag_Md5Mbsta7jW8eqLhjmov4g5iu90HP6_h_Mm_efTVgIbByrcAJqSqqh-UbnR7saSkIMRsmeLeDDGoAJKNPCMVrjlb0P9jZP0mnqOSaw-9lyxdOI2YFc53-lwE7711mszLBAspxVu8vcKNiU1kIz5Cw-ILlPFB4sLyPaIY8VwasqAyQ=w493-h329-no)
            no-repeat;
        }

        .image2 {
          border-right: 4px solid #fff;
          background: #000
            url(https://lh3.googleusercontent.com/Hw9DpGeejRlMJAobOLJ1ZBv3tPZp3gnBNldhe6BDVVZRhxYTy-LsCBdSjSB6IoWMKbBpdC-h9Y4zIozcWmLru1Dpi3sXHavE_PVMKlOlU7T6W_Qm9ZqZiVRaMJpWe8yqBdlqjJey-6XpxldDYIPXcz2zjVXHWWE-1e3cH1Q8TGjNRMhlSjVgsbywpTjIsrDrHx2wcbkl2sUU1mfxshJZgj-eb5UlRRLnYtikMWZuh6VHu3ZrOYQlOC_38kelBbknEdQqF27p4HGFLMaQC-3S87WXJ5JoPbu1fmhttfZ9n3rePFzN8QRSkYccwcRb3OlJ3nnadMNTdjnh_65BLjyXFDT5PamUXkX98GDDGstkjxnDVxaiGBzP-2Xuy7vAgyZA6SMYU4iLt5V9Ja7TxeM8Cr8B64mz4izJzgjn1ZJ1Hb3FyWMp223fj5b3cYFKmf3jpNMsKz_cygubAViLvFY7lrbAzNuDW0hLzPopg4n5uJPNUsmhTbn9hoPH6OVjXmVolNHbiF12UDuAdmenA7XhQU1AqAhMAZoGZ8dnfqb_io8asdbU6sO3d4T8S5aPBqSDjnQGR17U83jYGAfalmjoUpL9w57w2gqQKaAQZLltcze0aLOosILvs-fUJciZ6TZzHcI00LwEyAKj8g5xn7ETiBzlJURbj6FR6LZv-yi5F2w-lYP6OozOZ2qE3FNOAHbsJItPydmJe1kbj0jaeYj0E1YoVA=w372-h335-no)
            no-repeat;
        }

        .image4 {
          border-right: 4px solid #fff;
          background: #000
            url(https://lh3.googleusercontent.com/IXXaRR7E7A8qBFCIJnsuHFhGtoyH0p1yezwAgQfxztYtjz4vG5FjMPAgFrUMwpow6RhcTdAl7ee405A8JF_r0mUeQHyQYP7U0oiGViGoqDqObX5hDJ6xzISAyNLY2m2-_qSLK-sQwSQ7e9qNKH1vJlFUxtf3cJJlQntRK6_QaX1xKcFgr05FE2oApgJ9Juu4zfm4r0bUSkMyo8pB0IhJAlRx07cXbIQbrHVvu_PhsdWWHzdmqQViOSs6jPnJ3ezaNxfmxQkjSx3fjTVI8LtcXrqQCkizKtQ55FYFNlmozkQlaY2bZBwN_AK4jXjZsBLx0z1YM_yoaZYXdl2q2eWm18w9MKlA24aAtGRLYS5IQamWR5PI-1lBYv_MHISDUVNU1kiYuskUzl7EF-FxPvGhYi0dEgK6airXl2Fvt7k4nz3_6if5MerkRbD5NJebcImKSNkUGxMRdMAGvEC6NmBtDNWHpl_4UOaRquNt723Zn4ZWHnYvD7Wjr3sr5Ve2TP7Yny9we1zHHY4r1GiflPE7tpZZ5CizQy3IEaVxcZYKShLT0rPsd6tGGxmMOcKX-7-GtqQ5NmRDcPVaaYceDxqJtJOpe4sNSXhlzc7s8-R3Vswntrb5j75bEN_e7nA446pfPpGGK3rRC8yrMZ97ceiK5S_5rRaUW_lUtS2xyW__t26J7akzFpY92n5frc5xtniQ0_iJqJwAFQ70eVn9Q7iSZ8U7Pw=w452-h311-no)
            no-repeat;
        }

        .image3 {
          border-right: 4px solid #fff;
          background: #000
            url(https://lh3.googleusercontent.com/Rfx1WnQqRdRV11wP6IvVskfzuPKcbgy8Wbh9Uk91MrPpMhMfzLyXwsbrici6KOgVfRJdsiwMIwW0JHZZCt9ka5abiewsDfvL6jMAGLib0ARipBPicLzIhQwSeDbXlrjM9jeo06hMb7QLd7j080BKBqeb4PmdT7JE2_2Nad_kNL_ncM8RJ94_YpyHZiH1T-NmGndyMixpBiOmur56K0WKQ4NiIltBR7d80ZwWHhP1i3kCcGeImHPndodzEVeEbh9tsjRE_s9-RTRN6Nxrnmk9-yN-dkCyPkr-lVYG26U1ygb6C42HX0-HTqBEbT4_zs-V949TouULw8-PlfHGkDyGZfZLj6Q078PA7B0VoIWjTjJ0P0_4OtvoSRGgRRMFL7pFUIxNDFXYOixxEQNtw5DbTS51_f7GOdi2me-azWmgLzo6KVXYBTWdVnNDp4JMqLzxODfKUtDWCY4NCsK_Flp4rfzK3FxZbasWodUXERxDlr0WP4LvA04sF322u8eKXH04IZ1vQYh2hPhtf0enhvTo73M8iwcjAO_WxNnykhVcVjuFcXofI6uxtw1yESH8BHRcDBrj6sNm8xyYnzQciz35KEXC-7DUGSBo18P2zNp0uujsWTBYzWAh3mKNZ60mRVwtqVvTuF1VZidWfVO3DJatyBGjtxOdi5sRrDkf5fg9X41sn7Rg-xp7PYObHV0Om6DGyLpcM0COR42uPmcrTfNVNR57CQ=w472-h325-no)
            no-repeat;
        }

        .image6 {
          border-right: 4px solid #fff;
          background: #000
            url(https://lh3.googleusercontent.com/fA7WptD7_kvOT47yFYOgiaAMz1i4fTWRwaRituDq8S8O_vFvejrv2X7Alcot5w4v0fzSiDkCv4uSR2y0xpQSvlMnOzbhmL6Y4AUt9WsQpmKILlx5hKy1dyeKHae_k7g3LtKBaD_Znw9VgSTEQZ83ZSySmfRVyCdLb-MHNGdsWAtTwrdJjj5Z4q3TPCSYaq8yQPvL-1yfVCnVR6-vt_0orOvHNOPWR7ujHhY-Y09w8ptiOLz0_A9oaLUu2Q_wzQHV0_ue9RHUO1_c_e0--JO7ABwd21l-dvnZ7J_w8Aa0B763lKLBgnXiDFyrFXRiVT8G15TwnLLYcfPvpcZY9nj9Xtqa3bjQx65rbizI-tE0vSBcm2wet0EMaoOQ0GWSz1KBNljKXvi1qti61jZ_l69v4PqAgOOrnuWKWXeLsafdNPShUpq63qjLDWeagrlUWoUdkxZCghfBMDOBDLT8SIbwKsdjEQge3Dzx7hDMZhKuvFOodAgcSCanokY75tS96hgGrbJMLok1Zjn5d_QzucimNxXVKq4pvHvms1MEVBf4XaSc2BqR6ZK_VdXFXhHR4AxdavegmbLgbHgK0O8F-FQWrprtdzETQ1Ae62v61BSGPoVY77DgJBlL6VDQZig3sWn133BjL27ROYQwEo5YJmNZXNBaId1J1PLNqSM76v_yVqMdEU9miOnSAQD7nKtbpq4uyZD0mqDmdbBrzULjadqJSl9pxw=w413-h375-no)
            no-repeat;
        }
      `}
    </style>
  </div>
);
