		window.onload =	function(){ 
            document.getElementById('game').style.visibility = 'hidden';
        }
		
		function Jogador(nome, forma) {
			this.nome = nome;
			this.forma = forma;
		}
		
		var jogador1, jogador2;
		var jogadorAtual;
		var formas = ['X', 'O'];
		var index = null;
		var tabuleiro = new Array(9);

		initGame = function() {
			var nomeJogador1 = document.getElementById('jogador1').value;
			var nomeJogador2 = document.getElementById('jogador2').value;
			jogador1 = new Jogador(nomeJogador1, 0); 
			jogador2 = new Jogador(nomeJogador2, 1); 

			jogadorAtual = jogador1;
			setLabelJogadorAtual();
			document.getElementById('game').style.visibility = 'visible';
			
		}

		/*Reinicia a partida*/
		reset = function() { 
            window.location.reload(); 
        }
		
		/*Seta o nome do jogador da rodada na página HTML*/
		setLabelJogadorAtual = function() {
			document.getElementById('jogadorAtual').innerHTML = 'Vez de:  ' + jogadorAtual.nome + ' jogar!';
		}

		/*Verifica se o tabuleiro está completamente preenchido, se estiver, significa que ninguém venceu a rodada*/
		tabuleiroIsFilled = function() {
			var preenchidos = 0;
				for(var i = 0; i < tabuleiro.length; i++)
					if(tabuleiro[i]	!= undefined){
                        preenchidos++;
                    }
				return preenchidos == tabuleiro.length;
		}

		/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas linhas do tabuleiro, procurando um vencedor*/
		allElementsInSomeLine = function() {
			for( var i = 0; i < 7; i += 3) {
				if ( tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X' ) { 
					alert (jogador1.nome + ' Ganhou');
					reset();
				}
				if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
					alert (jogador2.nome + ' Ganhou');
					reset();
				}
			}
		}

		/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas colunas do tabuleiro, procurando um vencedor*/
		allElementsInSomeColumn = function() {
			for( var i = 0; i < 3; i++) {
				if ( tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X' ) { 
					alert (jogador1.nome + ' Ganhou');
					reset();
				}
				if ( tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O' ) {
					alert (jogador2.nome + ' Ganhou');
					reset();
				}
			}

		}

		/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas diagonais do tabuleiro, procurando um vencedor*/
		allElementsInSomeDiagonal = function() {
			if ( (tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') ||
	 			 (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')) {
					alert (jogador1.nome + ' Ganhou');
				reset();
			} else if ( (tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] == 'O') ||
					    (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O') ) {
					alert (jogador2.nome + ' Ganhou');
				reset();
			} 
		}

		/*Preenche a célula da tabela HTML escolhida pelo usuário ao clicar, além de cuidar do jogador atual da rodada e chamar as funções
		  de verificação de algum ganhador */
		setOnCeil = function(cel, pos) { 
				if(tabuleiro[pos] == undefined) {
					cel.innerHTML = formas[jogadorAtual.forma];
					tabuleiro[pos] = formas[jogadorAtual.forma];

					//define o jogador da rodada
					(jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
					setLabelJogadorAtual();

				}else{
                    alert('Posição ocupada ocupada');
                }

				allElementsInSomeLine();
				allElementsInSomeColumn();
				allElementsInSomeDiagonal();
	
				if ( tabuleiroIsFilled() ) {
					alert ('Deu velha!');
					reset();
				}
				
			
		}

 