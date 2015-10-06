build-dir=../build
theme=green-icon

all: ${theme}

green-icon:
	mkdir ${build-dir};rsync -avC --progress lab/* ${build-dir};rsync -avC --progress themes/${theme}/* ${build-dir}
clean:
	rm -rf ${build-dir}









