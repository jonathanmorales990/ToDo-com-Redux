import React, { Component } from 'react';
import perfil from '../img/01.jpg';

class Perfil extends Component {

	constructor(props) {

	super(props);

	}

	render() {
		return (
			<div className="container-perfil">

				<div className="container-perfil-left">



					<div className="perfil-card-background" onClick={this.onClick}>
						<div className="perfil-image" style={{backgroundImage: `url(${perfil})`}} />
					</div>

					<div className="container-perfil-status">
						<span className="circle-status-perfil" />
					</div>

					<div className="container-perfil-dados">

						<div className= "perfil-dados">
							<p className= "perfil-nome">Lisa Helma Davoz</p>
							<p className= "perfil-cargo">Senior Dev</p>
						</div>

						<div className= "perfil-dados-status-container">
							<p className= "perfil-dados-titulo">Você possui:</p>

							<div>
								<p className= "perfil-dados-numero">{('0' +this.props.pendentes).slice(-2)}</p>
								<p className= "perfil-dados-status">pendentes</p>
							</div>

							<div>
								<p className= "perfil-dados-numero">{('0' + this.props.emproducao).slice(-2)}</p>
								<p className= "perfil-dados-status">em produção</p>
							</div> 

							<div>
								<p className= "perfil-dados-numero">{('0' +this.props.resolvido).slice(-2)}</p>
								<p className= "perfil-dados-status">resolvidas</p>
							</div> 

						</div>

					</div>

				</div>

				<div className="container-perfil-right">

					<a href="#open-modal-novo"><button className="cria-taks-button"> <span className="textButton">Adicionar Task</span> </button></a>

				</div>

			</div>
		);
	}
}

export default Perfil;