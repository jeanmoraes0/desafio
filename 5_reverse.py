# Definindo a string a ser invertida
minha_string = str(input('Digite uma string para ser invertida: '))

# Inicializando uma string vazia para armazenar a string invertida
string_invertida = ""

# Iterando pela string de trás para frente
for i in range(len(minha_string) - 1, -1, -1):
    # Adicionando cada caractere à nova string
    string_invertida += minha_string[i]

# Imprimindo a string invertida
print(string_invertida)