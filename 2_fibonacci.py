# Solicita ao usuário um número
num = int(input("Informe um número: "))

# Inicia a sequência de Fibonacci com 0 e 1
fibonacci = [0, 1]

# Calcula a sequência de Fibonacci até atingir ou ultrapassar o número informado
while fibonacci[-1] < num:
    fibonacci.append(fibonacci[-1] + fibonacci[-2])

# Verifica se o número informado pertence à sequência de Fibonacci
if num in fibonacci:
    print(f"O número {num} pertence à sequência de Fibonacci!")
else:
    print(f"O número {num} não pertence à sequência de Fibonacci.")