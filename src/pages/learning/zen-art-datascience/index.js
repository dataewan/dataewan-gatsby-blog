import React from 'react'

import {
  Section, Paragraph, Figure, Linktree, Linknode
} from '../../../components'

class ZenIndex extends React.Component {
  render() {
    return (
      <Section name='Zen and the art of data science'>
        <Paragraph
        >
          I recently read <a href="https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance">Zen and the Art of Motorcycle Maintenance</a>.
          I'd put reading this book off for a while. 
          I assumed it was going to be over the top and not to my taste.
          I was pleasantly surprised that I was wrong.
          Parts of this book gave me a fresh perspective to consider.
        </Paragraph>
        <Figure fullwidth={false} caption="Front cover">
          <img src="https://lh3.googleusercontent.com/7b6CgMHVX0FarWRaVoUFa3XZ8_BlZ5vvWra1RZK1ORfXapZz-6AY9zWQE5oDTvyhcFTCuQf3gq6DzhOHjdN4YYDey__yuses5aQMeK0NHz21VOMdS2QQU4PKPWUQztHffebOoppHgCFkmpp0Dsa2j2IFXElXWb2vr8P9Rp3jFv6HywjKa2xVhntVyCTa_HXCiYASsqBglqpH_ZzZCzgCvadRn5D7yt7yFI-RjRkZW_wv0_YfSvFB1fnYmVw2uETZtzLOvAAyrVnifDtKwiC2jESvRNqN8aPXt-OdZr_o8texjJZ0pvmlPuM0oaXfggb0EOluc02DWOJsd-HILx91LNG7Qph5aI4-dVe4RwggOTjh7h4-M6zOkZDK1fgroAY2eek7UmrlRy6qqkg6ucwjz3-7TwBB_A-Yn-_kfcY6JW0iL6j01gu70dauSb3iOHDrBSgFGcq_Uf2Db9e3VdxxaarzAg3_n5_y_Q0SEfe1088TurbvRP91VFvd3QQsy6w__QMrdAIIsXVYRGmVKgY6QCpLDRtpkenDcG4uu5OgCS9Md3nUrpbENrhqYjneWajxJXT0BJjlIZi8Xi5V364rGxfusKv2h_u4BWlFLrRYidMfGtys_uQS_m2_0WB4ddsmuOJTUvL8f9NpMyNEL8LzXG_yp1_YAr_w=w1098-h1464-no" alt='Front cover' />
        </Figure>
        <Paragraph>
          Some of the ideas sparked while reading relate to my vocation,
          how I think of data science.
          I've stolen the title of the book,
          and written a series of notes titled <i>Zen and the Art of Datascience</i>.
        </Paragraph>
        <Linktree>
          <Linknode to='/learning/zen-art-datascience/classic_vs_romantic' desc='Comparing classical and romantic ways of looking at the world' />
          <Linknode to='/learning/zen-art-datascience/components_and_functions' desc='Breaking down things into components and breaking them into functions' />
          <Linknode to='/learning/zen-art-datascience/quality' desc='What is quality?' />
          <Linknode to='/learning/zen-art-datascience/gumption_traps' desc='Gumption traps' />
        </Linktree>
      </Section>
    );
  }
}


export default ZenIndex
