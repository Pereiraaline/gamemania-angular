import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  fazerLogin(){
    // console.log(this.userModel);

    this.userService.login(this.userModel).subscribe({
      next: (response) => {
        this.mensagem = "Login efetuado com sucesso"
      },
      error: (responseError) => {
        let txtError = responseError.error

        console.log("[ERRO]", responseError);
        if (txtError == "Cannot find user"){
          this.mensagem = "Usuário Inválido"
        } else if (txtError == "Incorrect password"){
          this.mensagem = "Senha Incorreta"
        }else if (txtError == "Password is too short"){
          this.mensagem = "Senha muito curta"
        }else if (txtError == "Email and password are required"){
          this.mensagem = "Preencher todos os campos"
        }else if (txtError == "Email format is invalid"){
          this.mensagem = "Formato de e-mail inválido"
        }
        else{
          this.mensagem = "Verifique todos os campos e tente novamente"
        }

      },
      complete : () => {
        window.alert('Agradecemos a preferência!')
      } 
    })
  }

  validarLogin(){
    console.log("clicou!")
  }

}
