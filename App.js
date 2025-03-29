import * as React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image } from 'react-native';
import { TextInput, Text, Button, List, Card, Title, Paragraph } from 'react-native-paper';
import { useState } from 'react';

const { width, height } = Dimensions.get('window'); 

export default function App() {
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [cpf, setCpf] = React.useState("");

    const [cep, setCep] = React.useState("");
    const [render, setRender] = React.useState([]);

    const [selectedValue, setSelectedValue] = React.useState(null);

    const [expanded, setExpanded] = React.useState(false);

    const handleAccordionPress = () => setExpanded(!expanded);

    const handleItemPress = (value) => {
        setSelectedValue(value);
        setExpanded(false);
    }

    const BuscaCep = (xcep) => {
        let url = `https://viacep.com.br/ws/${xcep}/json/`;

        fetch(url)
            .then((resp) => { return resp.json() })
            .then((dados) => {
                setRender(dados);
                setSelectedValue(dados.uf);
            })
            .catch((erro) => { console.log(erro); });
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('./assets/logo.png')} />
            </View>

            <Text style={styles.title}>ViaCEP</Text>

            <Text style={styles.title}>Busque as informações de um CEP agora mesmo!, basta inserir o número do CEP logo abaixo e pressionar o botão.</Text>    

            <TextInput
                label={'CEP:'}
                mode='outlined'
                value={cep}
                onChangeText={(value) => { setCep(value) }}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <Button
                icon="tab-search"
                mode="contained"
                onPress={() => { BuscaCep(cep) }}
                style={styles.button}>
                Busca
            </Button>

            <TextInput
                label={'Nome: '}
                value={nome}
                mode='outlined'
                onChangeText={setNome}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Email: '}
                value={email}
                mode='outlined'
                onChangeText={setEmail}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Telefone: '}
                value={telefone}
                mode='outlined'
                onChangeText={setTelefone}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'CPF: '}
                value={cpf}
                mode='outlined'
                onChangeText={setCpf}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Endereço: '}
                value={render.logradouro}
                mode='outlined'
                onChangeText={(value) => { setRender(render.logradouro = value) }}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Número: '}
                mode='outlined'
                onChangeText={() => {}}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Complemento: '}
                mode='outlined'
                onChangeText={() => {}}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Bairro: '}
                value={render.bairro}
                mode='outlined'
                onChangeText={(value) => { setRender(render.bairro = value) }}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <TextInput
                label={'Cidade: '}
                value={render.localidade}
                mode='outlined'
                onChangeText={(value) => { setRender(render.localidade = value) }}
                style={styles.input}
                theme={{ colors: { primary: '#8AB2A6' } }}
            />

            <List.Section title="Estado" titleStyle={{ color: '#006A71'}} style={styles.AccordionStyle}>
                <List.Accordion
                    title={selectedValue == null ? 'Selecione o Estado' : selectedValue}
                    expanded={expanded}
                    onPress={handleAccordionPress}
                    theme={{ colors: { primary: '#006A71' } }}
                >
                     <List.Item title="Acre"  onPress = {() => handleItemPress("AC")}/>
                     <List.Item title="Alagoas" onPress = {() => handleItemPress("AL")}/>
                     <List.Item title="Amapá" onPress = {() => handleItemPress("AP")}/>
                     <List.Item title="Amazonas" onPress = {() => handleItemPress("AM")}/>
                     <List.Item title="Bahia" onPress = {() => handleItemPress("BA")}/>
                     <List.Item title="Ceará" onPress = {() => handleItemPress("CE")}/>
                     <List.Item title="Distrito Federal" onPress = {() => handleItemPress("DF")} />
                     <List.Item title="Espirito Santo" onPress = {() => handleItemPress("ES")}/>
                     <List.Item title="Goiás" onPress = {() => handleItemPress("GO")}/>
                     <List.Item title="Maranhão" onPress = {() => handleItemPress("MA")}/>
                     <List.Item title="Mato Grosso do Sul" onPress = {() => handleItemPress("MS")}/>
                     <List.Item title="Mato Grosso" onPress = {() => handleItemPress("MT")}/>
                     <List.Item title="Minas Gerais" onPress = {() => handleItemPress("MG")}/>
                     <List.Item title="Pará" onPress = {() => handleItemPress("PA")}/>
                     <List.Item title="Paraíba" onPress = {() => handleItemPress("PB")}/>
                     <List.Item title="Paraná" onPress = {() => handleItemPress("PR")}/>
                     <List.Item title="Pernambuco" onPress = {() => handleItemPress("PE")}/>
                     <List.Item title="Piauí" onPress = {() => handleItemPress("PI")}/>
                     <List.Item title="Rio de Janeiro" onPress = {() => handleItemPress("RJ")}/>
                     <List.Item title="Rio Grande do Norte" onPress = {() => handleItemPress("RN")}/>
                     <List.Item title="Rio Grande do Sul" onPress = {() => handleItemPress("RS")}/>
                     <List.Item title="Rondônia" onPress = {() => handleItemPress("RO")}/>
                     <List.Item title="Roraima" onPress = {() => handleItemPress("RR")}/>
                     <List.Item title="Santa Catarina" onPress = {() => handleItemPress("SC")}/>
                     <List.Item title="São Paulo" onPress = {() => handleItemPress("SP")}/>
                     <List.Item title="Sergipe" onPress = {() => handleItemPress("SE")}/>
                     <List.Item title="Tocantins" onPress = {() => handleItemPress("TO")}/>
                </List.Accordion>
            </List.Section>

            <Text style={styles.selectedStateText}>Estado: {selectedValue}</Text>

            <Card style={styles.card}>
                <Card.Content>
                    <Title>Feito por:</Title>
                    <Text>
                        Enzo Mendes & Ana Ribeiro
                    </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#F2EFE7',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    AccordionStyle:{
        borderRadius: 200,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 120,
        height: 120,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006A71',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#F6F1DE',
        marginBottom: 20,
        borderRadius: 5,
    },
    buttonWrapper: {
        marginBottom: 20,
        backgroundColor: '#F6F1DE'
    },
    button: {
        width: width - 40,
        borderRadius: 5,
        backgroundColor: '#8BBF9F'
    },
    selectedStateText: {
        borderRadius: 20,
    },
    card: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#C1CFA1',
        borderRadius: 10,
        elevation: 5,
    },
});
