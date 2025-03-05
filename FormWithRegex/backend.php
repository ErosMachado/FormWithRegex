<?php
// Validação de e-mails via PHP
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'validateEmail') {
        $text = $_POST['text'] ?? '';
        preg_match_all('/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/', $text, $matches);
        echo json_encode($matches[0]);
        exit;
    }

  
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST['data'] ?? 'Nenhum dado fornecido';
    $filename = 'output.txt';

    header('Content-Type: text/plain');
    header("Content-Disposition: attachment; filename=$filename");

    echo $data;
    exit;
}


    // Validação de CPF via PHP (ainda emm testes)
    if ($_POST['action'] === 'validateCPF') {
        $cpf = preg_replace('/\D/', '', $_POST['cpf']);
        function isCPFValid($cpf) {
            if (strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)) {
                return false;
            }
            for ($t = 9; $t < 11; $t++) {
                for ($d = 0, $c = 0; $c < $t; $c++) {
                    $d += $cpf[$c] * (($t + 1) - $c);
                }
                $d = ((10 * $d) % 11) % 10;
                if ($cpf[$c] != $d) {
                    return false;
                }
            }
            return true;
        }
        echo json_encode(['valid' => isCPFValid($cpf)]);
        exit;
    }
}


    // Download de dados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST['data'] ?? 'Nenhum dado fornecido';
    $filename = 'output.txt';

    header('Content-Type: text/plain');
    header("Content-Disposition: attachment; filename=$filename");

    echo $data;
    exit;
}
?>
