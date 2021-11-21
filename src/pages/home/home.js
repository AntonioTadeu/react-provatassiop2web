import { Component } from "react";
import Carrossel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import Header from "../../components/navbar/navbar";
import SecaoProdutos from "../../components/secaoCards/secaoCards";

export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <Carrossel />
        <SecaoProdutos />
        <Footer />
      </article>
    );
  }
}