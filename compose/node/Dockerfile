FROM node:14.12

ARG LOCAL_USERNAME=node

# Create the user
# install mongodb (https://docs.mongodb.com/manual/tutorial/getting-started/)
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add - \
    && echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list \
    # [Optional] Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get update \
    && apt-get install -y \
       sudo \
       vim \                           
       mongodb-org \
    && echo $LOCAL_USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$LOCAL_USERNAME \
    && chmod 0440 /etc/sudoers.d/$LOCAL_USERNAME \
    && mkdir /home/$LOCAL_USERNAME/src \
    && chown $LOCAL_USERNAME:$LOCAL_USERNAME /home/$LOCAL_USERNAME/src \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ********************************************************
# * Anything else you want to do like clean up goes here *
# ********************************************************

# [Optional] Set the default user. Omit if you want to keep the default as root.
USER $LOCAL_USERNAME

CMD ["/bin/bash"]
