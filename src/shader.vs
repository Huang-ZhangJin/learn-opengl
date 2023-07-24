#version 330 core

in vec3 position;
in vec3 color;
in vec2 texCoord;

out vec3 Color;
out vec2 TexCoord;

uniform mat4 transform;

void main()
{
    gl_Position = transform * vec4(position, 1.0);
    // gl_Position = vec4(position.x, position.y, position.z, 1.0);
    Color = color;
    TexCoord = texCoord;
}