import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section center">
        <img src={aboutImg} alt="about" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              maiores rerum vero veritatis illum! Fugiat libero eaque id beatae,
              labore itaque quo ipsa blanditiis expedita hic maiores modi est!
              A, dolore error fugiat dolorem temporibus saepe voluptates
              tenetur, non laudantium beatae voluptate et! Accusantium quos
              dolor pariatur omnis ut quo ipsum ipsa cum aliquid repellat!
              Consectetur dignissimos nulla in nam temporibus nobis quis eos
              aspernatur ab pariatur, numquam repudiandae at molestiae ducimus
              mollitia iusto dolores impedit adipisci perferendis praesentium,
              modi libero. Delectus facere vero mollitia ullam odio amet
              distinctio a, tempora impedit labore ipsam perferendis sunt at,
              perspiciatis, provident officia. Hic in culpa accusamus optio ipsa
              porro voluptatem corporis nobis. Autem expedita eius similique,
              eos atque quidem iusto voluptatum omnis numquam aliquam, dolorum
              nostrum, enim voluptate dolor. Quos nesciunt tempore, officia
              eaque maxime numquam culpa. Provident temporibus cumque molestias
              rerum hic adipisci, reiciendis sapiente sed sit accusamus
              inventore eius optio aspernatur vitae. Veritatis reprehenderit rem
              commodi magnam laborum blanditiis odit unde deserunt corporis
              pariatur modi fugit eos perspiciatis deleniti dolor accusamus
              doloribus, eum sunt assumenda? Corrupti explicabo nihil quae
              aspernatur neque inventore velit officia atque animi sequi
              excepturi est, a repellendus autem exercitationem nemo odio
              delectus at, eligendi ut mollitia! Vitae, blanditiis nulla
              corrupti cupiditate deserunt sint aliquam porro, voluptas quas
              dolores iusto quo quisquam, quidem aliquid! Nihil a, officia eos
              perspiciatis inventore atque voluptas. Cum accusamus praesentium
              voluptate beatae recusandae aperiam ducimus aliquid, repudiandae,
              exercitationem unde sequi quasi. Recusandae consectetur ab
              accusantium, veniam voluptatum quo amet exercitationem odio
              dolore?
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
