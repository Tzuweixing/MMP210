
   

const int buttonPin = 2;

const int potPin = A0;
const int potPin2=A1;

const int ledPin = 4;
const int ledPin2= 5;
const int ledPin3= 6;
const int ledPin4= 7;
const int ledPin5= 8;





int buttonState = 0;

int potState = 0;
int potState2 = 0;
//int left, i;



void setup() {

// initialize the LED pin as an output:

pinMode(ledPin, OUTPUT);
pinMode(ledPin2, OUTPUT);
pinMode(ledPin3, OUTPUT);
pinMode(ledPin4, OUTPUT);
pinMode(ledPin5, OUTPUT);

// initialize the pushbutton pin as an input:
pinMode(buttonPin, INPUT);

pinMode(potPin, INPUT);

pinMode(potPin2, INPUT);

//pinMode(potPin, INPUT);

//pinMode(buttonPin, INPUT);

Serial.begin(9600);

}



void loop() {

// read the state of the pushbutton value:

potState = analogRead(potPin);

potState2 = analogRead(potPin2);

// check if the pushbutton is pressed.

buttonState = digitalRead(buttonPin); //momentary button

int sensorValue = analogRead(A2);

  if (sensorValue < 970){
    digitalWrite(ledPin,HIGH);
    
  }
  else{ 
    digitalWrite(ledPin, LOW);
  }
//  delay(100);        // delay in between reads for stability
 if (sensorValue < 960){
  digitalWrite(ledPin2,HIGH);
 }
//  delay(100);
else{
  digitalWrite(ledPin2, LOW);
}
if(sensorValue<900){
  digitalWrite(ledPin3,HIGH);
}
//  delay(100);
else{
  digitalWrite(ledPin3,LOW);
}
if(sensorValue<870){
  
  digitalWrite(ledPin4,HIGH);
}

//  delay(100);
else{
  digitalWrite(ledPin4,LOW);}
  if(sensorValue< 840){
  digitalWrite(ledPin5,HIGH);
  }
 
//  delay(100);
else{
  digitalWrite(ledPin5,LOW);
  }
  
  
  
  




//detect state change

//if (digitalRead(buttonPin) != buttonState && buttonState == 0){

//  buttonState = 1;

//}

//if (digitalRead(buttonPin) != buttonState && buttonState == 1){

//  buttonState = 0;

//}



Serial.print(potState);
Serial.print("&");
Serial.print(potState2);

Serial.print("&");
Serial.print(buttonState);
Serial.print("&");

Serial.println(sensorValue);







}
