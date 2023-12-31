#version 330 core
out vec4 FragColor;

in vec2 TexCoords;
in vec3 Normal;
in vec3 Position;

uniform vec3 cameraPos;
uniform samplerCube skybox;
uniform sampler2D texture1;


void main()
{    
    vec4 texColor = texture(texture1, TexCoords);
    // if (texColor.a < 0.1) discard;
    // FragColor = texColor;
    // FragColor = texture(texture1, TexCoords);

    // vec3 I = normalize(Position - cameraPos);
    // vec3 R = reflect(I, normalize(Normal));
    // FragColor = vec4(texture(skybox, R).rgb, 1.0);

    // float ratio = 1.00 / 1.52;
    // vec3 I = normalize(Position - cameraPos);
    // vec3 R = refract(I, normalize(Normal), ratio);
    // FragColor = texture(skybox, R);

}