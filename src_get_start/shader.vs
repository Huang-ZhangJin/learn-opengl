#version 330 core

in vec3 position;
in vec2 texCoord;

out vec2 TexCoord;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    gl_Position = projection * view * model * vec4(position, 1.0);
    // gl_Position = vec4(position.x, position.y, position.z, 1.0);
    TexCoord = texCoord;
}