 function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(conta);

            } catch(e) {
                alert('Conta invalida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        

        cliqueBotoes(){
            // this == calculadora
            document.addEventListener('click', function(e) {
                const el = e.target;
                console.log(e)

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                // limpar display
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                // apaga um
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                // realiza conta
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }


            }.bind(this));


        },

        // exibi o valor no display
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    }
 }

const calculadora = criaCalculadora();
calculadora.inicia();