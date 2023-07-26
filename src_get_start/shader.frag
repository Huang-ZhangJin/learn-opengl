#version 330 core

in vec2 TexCoord;

out vec4 outColor;

uniform float mixValue;
uniform sampler2D outTexture1;
uniform sampler2D outTexture2;

void main()
{
    // outColor = vec4(Color, 1.0f);
    // outColor = texture(outTexture, TexCoord) * vec4(Color, 1.0f);
    outColor = mix(texture(outTexture1, TexCoord), texture(outTexture2, vec2(TexCoord.x, TexCoord.y)), mixValue);
}